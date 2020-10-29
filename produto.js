// criar a classe
// Implemente em JS uma classe chamada Produto contendo as variáveis id , descrição , qtde  e preco . 
// Essa classe deve possuir o método construtor e ainda os métodos: •	
// comprar(int x): que compra um produto aumentando em x a quantidade em estoque;
//  •	vender(int x): que vende um produto diminuindo em x a quantidade em estoque; 
// •	aumentar(float x): que aumenta o preço do produto em x unidades; 
// •	diminuir(float x): que diminui o preço do produto em x unidades; 
// •	mostra(): que mostra todas as informações do produto   
// Finalmente que cria dois Produtos  e teste os métodos criados.


class Produto{

    constructor(id, descricao, qtd, preco){
        this.id = id
        this.descricao = descricao
        this.qtd = qtd
        this.preco = preco
    }

    comprar = (x) => {
        this.qtd += x
    }

    vender = (x) => {
        if (this.qtd - x >= 0){
            this.qtd -= x
        }
        else{
            console.log('Estoque insuficiente')
        }
        
    }

    aumentar = (x) => {
        this.preco += x
    }

    diminuir = (x) => {
        if (this.preco - x >= 0){
            this.preco -= x
        }
        else{
            console.log('Preço negativo')
        } 
    }

    mostra = () => {
        console.log(`Id: ${this.id} - Descrição: ${this.descricao} - Qtd: ${this.qtd} - Preço: ${this.preco}`)
    }

}

let prod1 = new Produto(1, 'teve', 100, 1000)

prod1.comprar(10)
prod1.vender(0)
prod1.aumentar(2)
prod1.diminuir(0)
prod1.mostra()

let a = Number(prompt(`Informe o id do produto 2`))
let b = prompt(`Informe a descrição do produto 2`)
let c = Number(prompt(`Informe a quantidade do produto 2 em estoque`))
let d = Number(prompt(`Informe o preço do produto 2`))
let prod2 = new Produto(a, b, c, d)
prod2.comprar(0)
prod2.vender(5)
prod2.aumentar(0)
prod2.diminuir(4)
prod2.mostra()