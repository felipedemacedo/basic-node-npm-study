// uma função do módulo personalizado:
const fatorial = (num)=>{
    if (num === 0){
        return 1
    }

    return num * fatorial (num - 1)
}

// exportando apenas a minha função 'fatorial':
module.exports = fatorial