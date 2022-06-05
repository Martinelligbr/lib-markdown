const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }
  return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'))
}

async function pegaArquivo(caminhoDoArquivo) {
  console.log(caminhoDoArquivo)
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
    return extraiLinks(texto);
  } catch(erro) {
    trataErro(erro);
  }
}

module.exports = pegaArquivo