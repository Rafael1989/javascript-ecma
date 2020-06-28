const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // sem this aqui da erro
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // nesse contexto da undefined o this

const falarDePessoa = pessoa.falar.bind(pessoa) // dessa forma o this vira pessoa
falarDePessoa()