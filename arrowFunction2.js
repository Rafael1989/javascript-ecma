function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade) // no caso o this é pessoa nao varia, pois é arrowfunction () => {}
    }, 1000)
}

new Pessoa