//Função para transformar a primeira letra de um nome em string
function firstLetterUpperCase(name) {
    var firstLetter = name.charAt(0).toUpperCase();
    return console.log(firstLetter + name.substring(1));
}
//chamar a fuction firstLetterUpperCase
firstLetterUpperCase(90);
