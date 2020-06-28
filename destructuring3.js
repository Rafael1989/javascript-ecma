function rand({min = 0, max = 1000}) { // no caso esta passando o obj ja com seu atributos com valor default
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj)) // pode passar os 2
console.log(rand({min: 995})) // só 1
console.log(rand({})) // ou nenhum
console.log(rand()) // tem que passar no minimo um objeto se nao da problema de undefined