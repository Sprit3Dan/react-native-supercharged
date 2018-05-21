var fs = require('fs');
var execSync = require('child_process').execSync;

function isObject(o) {
	return (typeof o === 'object') && (o != null);
}

function mergePackages(main, template) {
	return Object.keys(main).reduce(function(acc, key) {
		if (isObject(main[key]) && isObject(template[key])) {
			acc[key] = mergePackages(main[key], template[key]);
			return acc;
		}
		
		acc[key] = main[key];
		return acc;
	}, template);
}

function runInstall() {
	var package = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

	if (package.scripts.postinstall != null) {
		return;
	}
	
	var packageToMerge = JSON.parse(fs.readFileSync('./package.template.json', 'utf-8'));
	
	var newPackage = mergePackages(package, packageToMerge);
	fs.writeFileSync('./package.json', JSON.stringify(newPackage, null, '  '));
	
	console.log('Project package.json file changed. Installing dependencies now...');
	
	try {
		execSync('npm i', {stdio: 'inherit'});
	} catch (e) {
		console.warn('Failed to load dependencies, please run \'npm install\'');
	}
}

function runPatches() {
	try {
		console.log('Patch detox');
		execSync('sh ./scripts/patchDetox.sh');
	} catch (e) {
		console.warn('Can\'t patch detox');
	}

	try {
		console.log('Patch android');
		process.env.PROJECT_NAME = newPackage.name;
		process.env.PROJECT_NAME_LOWER = newPackage.name.toLowerCase();
		execSync('sh ./scripts/patchAndroid.sh', {stdio: 'inherit'});
	} catch (e) {
		console.warn('Can\'t patch detox');
	}
}

function end() {
	try {
		execSync('rm -rf scripts package.template.json');
	} catch (e) {
		// console.warn('Failed to load dependencies, please run \'npm install\'');
	}
}

(function completeSetup() {
	runInstall();
	runPatches();
	end();
})();
