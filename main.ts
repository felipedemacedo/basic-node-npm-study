//  diretório de onde está sendo executado o script:
console.log(`Executando o script a partir do diretório ${process.cwd()}`)
//------------------------------------------------------------------------------
//  usando módulos built-in:
import * as fs from 'fs' // <-- ES2015 | const fs = require('fs')
fs.writeFile("test.txt", "some content", (error) => {
    if (error) throw error
    console.log(`Arquivo test.txt salvo com sucesso.`)
})
//------------------------------------------------------------------------------
//  importando módulos personalizados:
const fatorial = require("./fatorial");
console.log(`O fatorial de 6 é ${fatorial(6)}`)
//------------------------------------------------------------------------------
// utilizando o YARGS para passar argumentos via chamada de script

import * as yargs from 'yargs' 
const argv = yargs // <-- ES2015 | require('yargs')
    .alias("n", "num")
    .demandOption("num")
    .argv

const num = argv.num
console.log(`O fatorial de ${num} é ${fatorial(num)}`)
//------------------------------------------------------------------------------
// onde o node procura por módulos ?
console.log(module.paths) // [ 'C:\\primeiro-projeto\\node_modules', 'C:\\node_modules' ]
//------------------------------------------------------------------------------
// escutando o evento de saída do script
process.on('exit', () => {
    console.log('script prestes a ser finalizado !')
})
//------------------------------------------------------------------------------