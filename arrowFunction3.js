let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // no node é global, porém no browser é window, pode dar problema true

const obj = {}
comparaComThis = comparaComThis.bind(obj) //true
comparaComThis(global) //false
comparaComThis(obj) //true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // funcao arrow nao aponta pro global false
comparaComThisArrow(module.exports) //true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // bind nao muda o this de arrow function false
comparaComThisArrow(module.exports) // true