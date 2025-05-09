//POO
//obs: variavel?: type, o ? significa opcional
function resume(user: {name: string, age?: number}){
    if (user.age !== undefined){
        return `Olá ${user.name}, tudo bem? Você tem ${user.age} anos.`;
    }
    else {
        return `Ola ${user.name}, tudo bem?`;
    }
}

let user1 = {
    'name': 'Henry',
    'age': 9,
    'other': 22
};

resume(user1);