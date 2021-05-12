console.log('JS compiled');

const { exec } = require('child_process');

exec('node ts.ts', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
});

exec('python py.py', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
});

exec('go run go.go', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
});

exec('javac cry.java', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	} else {
		exec('java cry', (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
				return;
			}
			console.log(`stdout: ${stdout}`);
		});
	}
});

exec('kotlinc kt.kt -include-runtime -d kt.jar', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	} else {
		exec('java -jar kt.jar', (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
				return;
			}
			console.log(`stdout: ${stdout}`);
		});
	}
});

exec('ruby ruby.rb', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
});
