//Tipando os paramentros e o return;
//  Função para transformar a primeira letra de um nome em string
function firstLetterUpperCase(name: string): string{
    //charAt() pega a posição da letra - toUpperCase transforma em maiúscula
    let firstLetter = name.charAt(0).toUpperCase();
    //substring() retorna o nome a partir do vetor 
    return firstLetter + name.substring(1);
}

//  chamar a fuction firstLetterUpperCase
//  firstLetterUpperCase(90); --> Error
let nome: string = firstLetterUpperCase('henry');

// Função para somar dois números
function soma(n1: number, n2: number): number{
    return n1 + n2;
}

let valor: number = soma(3,4);
