//Para um variavel que possui varios tipos
let age: string | number = 90;

function readAge(age: string | number){
    //deve-se fazer tratamentos
    if (typeof age == 'string'){
        console.log(age.toUpperCase());
    }
    else {
        console.log("Minha idade e " + age); 
    }
}

