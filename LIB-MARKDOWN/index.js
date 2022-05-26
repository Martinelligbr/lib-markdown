const chalk = require('chalk');

console.log(chalk.blue('Olá, Mundo!'));

const paragrafo = 'texto retornado por uma função';

    function texto(string) {
        return string;
    }

    console.log(texto(paragrafo));