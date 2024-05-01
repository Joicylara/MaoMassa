function nome(){
    let name = prompt('Digite o seu nome: ');
    return alert(`Olá ${name}`);
}

nome();

function soma(a,b){
    return a + b;
}
soma(20, 20);

function subtracao(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

let n1 = prompt('Digite o primeiro numero: ');
let n2 = prompt('Digite o segundo numero: ');

alert(mul(n1, n2));

let mat = prompt(`Digete qual operação deseja fazer: \n
`)