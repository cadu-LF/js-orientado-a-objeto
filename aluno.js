// criar a classe
class Aluno{

    constructor(nro, nome, idade, p1, p2){
        this.nro = nro
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }

    notaFinal = () =>{
        return (this.p1 + this.p2) / 2
    }

    mostra = () => {
        console.log(`Número: ${this.nro} - Nome: ${this.nome} - Idade: ${this.idade} - Nota final: ${this.notaFinal()}`)
    }

    passou = () => {
        if (this.notaFinal() >= 6){
            return `${this.nome} foi aprovado`
        } 
        else{
            return `${this.nome} foi reprovado`
        }
    }

    
}

// criando e instanciando objetos
let aluno1 = new Aluno(111, 'Carlos', 18, 6, 8)
aluno1.mostra()
console.log(aluno1.passou())

let n = Number(prompt('Informe o nro do aluno 2'))
let b = prompt('Informe o nome do aluno 2')
let c = Number(prompt('Informe a idade do aluno 2'))
let d = Number(prompt('Informe a nota da prova 1 do aluno 2'))
let e = Number(prompt('Informe a nota da prova 2 do aluno 2'))
let aluno2 = new Aluno(n, b, c, d, e)
aluno2.mostra()
console.log(aluno2.passou())