// uma função do módulo personalizado:
const fatorial2 = (num)=>{
    if (num === 0){
        return 1
    }

    return num * fatorial2 (num - 1)
}

// exportando apenas a minha função 'fatorial':
module.exports = fatorial2