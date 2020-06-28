function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // dessa forma Corrige pois estava NAN , pois o this nao é a pessoa
}

new Pessoa