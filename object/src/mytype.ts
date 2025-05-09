type Age = string | number;

let age1: Age = '34';
let age2: Age = 34;

//Objetos
//Type - nao e alteravel
type User = {
    name: string,
    age: number
};

//Interface - alteravel
interface UserInterface {
    nameInterface: string;
    ageInterface: number;
}
//adicao
interface UserInterface {
    cpf: string;
}

function resume(userResume: User){
    return `Ola ${userResume.name}, voce tem ${userResume.age}`;
}