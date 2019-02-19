//  diretório de onde está sendo executado o script:
console.log(`Executando o script a partir do diretório ${process.cwd()}`)

//  usando módulos built-in:
const fs = require('fs')
fs.writeFile("test.txt", "some content", (error) => {
    if (error) throw error
    console.log(`Arquivo test.txt salvo com sucesso.`)
})

//  importando módulos personalizados:
const fatorial = require('./fatorial')      // primeiro na ordem de precedência (módulo com package.json)
const fatorial3 = require('./fatorial3')    // segundo
const fatorial2 = require('./fatorial2')    // terceiro e último

console.log(`O fatorial de 6 é ${fatorial(6)}`)
console.log(`O fatorial3 de 4 é ${fatorial3(4)}`)
console.log(`O fatorial2 de 5 é ${fatorial2(5)}`)


// utilizando o YARGS para passar argumentos via chamada de script
const argv = require('yargs')
    .alias("n", "num")
    .demandOption("num")
    .argv

const num = argv.num
console.log(`O fatorial de ${num} é ${fatorial(num)}`)

// onde o node procura por módulos ?
console.log(module.paths) // [ 'C:\\primeiro-projeto\\node_modules', 'C:\\node_modules' ]

// escutando o evento de saída do script
process.on('exit', () => {
    console.log('script prestes a ser finalizado !')
})