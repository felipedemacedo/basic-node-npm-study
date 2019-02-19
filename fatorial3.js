// uma função do módulo personalizado:
const fatorial3 = (num)=>{
    if (num === 0){
        return 1
    }

    return num * fatorial3 (num - 1)
}

// exportando apenas a minha função 'fatorial':
module.exports = fatorial3