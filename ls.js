function ls() {
  process.stdout.write('prompt > ');

  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls') {
      process.stdout.write(`${process.cwd()}`)
    } else {
      process.stdout.write('You typed: ' + cmd);
    }

    process.stdout.write('\nprompt > ');
  })
}

module.exports = {
  ls
}
