// Implemente em JS uma classe chamada Rio contendo as variáveis nome, nível e poluído. Essa classe deve possuir o método construtor, e ainda os métodos:
// •	chover(float): que aumenta o nível atual do rio;
// •	ensolarar(float): que diminui o nível atual do rio;
// •	limpar(): que limpa o rio;
// •	sujar(): que polui o rio;
// •	mostra(): que mostra todas as informações do rio.

// Finalmente, cria dois Rios (cada um deve utilizar um construtor diferente) e teste os métodos criados.

class Rios{

    constructor(nome, nivel, poluido){
        this.nome = nome
        this.nivel = nivel
        this.poluido = poluido
    }

    chover = () => {

    }

    ensolarar = () => {

    }

    limpar = () => {

    }

    sujar = () => {

    }

    mostrar = () => {
        console.log(`Nome: ${this.nome} - nivel: ${this.nivel} - poluido: ${this.poluido}`)
    }

}

let rio1 = new Rios()
let rio2 = new Rios()