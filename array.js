console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados) //[ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
aprovados.sort()
console.log(aprovados) //[ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1 /*indice para começar*/, 0/*quantidade de elementos pra deletar*/, 'Elemento1'/*novos elementos*/, 'Elemento2')  //[ 'Bia', 'Elemento1', 'Elemento2', 'Carlos', 'Ana' ]
console.log(aprovados)