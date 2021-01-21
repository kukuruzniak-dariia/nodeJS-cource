var {stdin, stdout} = process;
stdin.resume();

stdin.on('data', function(data) {
		var reversedInput = data.toString()
			.trim()
			.split("")
			.reverse()
			.join("");	 
		stdout.write(reversedInput + '\n\n');
	});