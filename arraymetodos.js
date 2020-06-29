const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // add na primeira posicao
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // add os elementos a partir da posicao 2
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array a partir da posicao 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // a partir do 1 até o 3 , o 4 nao conta
console.log(algunsPilotos2)