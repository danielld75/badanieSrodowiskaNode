process.stdin.setEncoding("utf-8");
process.stdout.write("Wybierz: \n a wyjście z programu. \n b wypisz wersję Node.\n c wypisz język systemowy.\n");
process.stdin.on('readable', function () {
  var input = process.stdin.read();
  if (input != null) {
    var instruction = input.toString().trim();
    switch (instruction) {
      case 'a':
        process.stdout.write('Quitting app!\n');
        process.exit();
      case 'b':
        process.stdout.write("Wersja Node to: " + process.version.toString() + "\n");
        break;
      case 'c':
        process.stdout.write("Jezyk systemowy to: " + process.env.SHELL.toString() + "\n");
        break;
      default:
        process.stdout.write("Wybierz 'a' 'b' lub 'c'.\n");
    }
  }
});
