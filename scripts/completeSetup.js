var fs = require('fs');
var execSync = require('child_process').execSync;

var package = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
var packageToMerge = JSON.parse(fs.readFileSync('./package.template.json', 'utf-8'));

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

var newPackage = mergePackages(package, packageToMerge);
fs.writeFileSync('./package.json', JSON.stringify(newPackage, null, '  '));

console.log('Project package.json file changed. Installing dependencies now...');

try {
	execSync('npm i', {stdio: 'inherit'});
} catch (e) {
	console.warn('Failed to load dependencies, please run \'npm install\'');
}

try {
	console.log('Patch detox');
	execSync('sh ./scripts/patchDetox.sh', {stdio: 'inherit'});
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

try {
	execSync('rm -rf scripts package.template.json');
} catch (e) {
	// console.warn('Failed to load dependencies, please run \'npm install\'');
}
