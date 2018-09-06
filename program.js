process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		var nodeVersion = process.versions.node;
		var userLanguage = process.env.LANG;
		if (instruction === '/exit') {
			process.stdout.write('Quitting app!\n');
			process.exit();
		} else {
			process.stderr.write('Wrong instruction!');
			process.stdout.write('\r\nNode Version: ' + nodeVersion + '\r\nYour language: ' + userLanguage);

		}
	}
});