var fs = require('fs');
var execSync = require('child_process').execSync;

var package = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
var packageToMerge = JSON.parse(fs.readFileSync('./package.json.template', 'utf-8'));

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

fs.writeFileSync('./package.json', JSON.stringify(mergePackages(package, packageToMerge), null, '  '));

try {
	execSync('npm i');
} catch (e) {
	console.warn('Failed to load dependencies, please run \'npm install\'');
}
try {
	execSync('rm -rf scripts');
} catch (e) {
	console.warn('Failed to load dependencies, please run \'npm install\'');
}
