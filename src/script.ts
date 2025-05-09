let n1 = document.getElementById('n1') as HTMLInputElement;
let n2 = document.getElementById('n2') as HTMLInputElement;
let cal = document.getElementById('calcular');
let res = document.getElementById('resposta');

function calcular(n1: number, n2: string){
    return n1 + n2;
}

cal.addEventListener('click', function(){
    res.innerHTML = calcular(+n1.value, +n2.value).toString();
})