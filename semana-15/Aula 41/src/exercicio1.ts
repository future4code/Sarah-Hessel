// a) os tipos declarados a uma variavel não aceitam outros tipos, por exemplo, uma string não pode ter um numero como valor.

const minhaString: string = 'Uma frase vermelha qualquer';
const meuNumero: number = 10

// b) através do onion type, por exemplo, let variavel: number | string = "sou uma frase"


enum CoresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul", 
    INDIGO = "Indigo",
    ROXO = "Roxo"
}

type pessoa = {
    nome?: string,
    idade?: number,
    corFavorita?: CoresArcoIris
}


const manuela: pessoa = {
    nome: "Manuela",
    idade: 23,
    corFavorita: CoresArcoIris.AZUL
}
const roberta: pessoa = {
    nome: "Roberta",
    idade: 27,
    corFavorita: CoresArcoIris.VERMELHO
}
const samantha: pessoa = {
    nome: "Samantha",
    idade: 29,
    corFavorita: CoresArcoIris.ROXO
}

