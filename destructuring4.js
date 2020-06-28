function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min] // para inverter de posicao quando o min for maior que o max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand()) // aqui da problema que no minimo precisa passar um array vazio 