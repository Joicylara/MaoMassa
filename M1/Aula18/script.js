// function mostrarNome(nome){
//     document.write(nome.toUpperCase());
//     document.write("<h1>" + nome.toLowerCase() + "</h1>")
// }

// mostrarNome("Teste");

function somar(n1, n2){
    document.write(`<h1 class = "title"> soma, subtração, multiplicação e divisão`);
    document.write(`<h1 class = "soma"> Resutado: `, n1 + n2, `</h2>`);
}

function subtrair(numb1, numb2){
    document.write("<br>", `<h1 class = "sub"> Resutado: `, numb1 - numb2,`</h2>`);
}


function mult(numero1, numero2){
    document.write("<br>", `<h1 class = "mult"> Resutado: `, numero1 * numero2,`</h2>`);
}

function div(numer1, numer2){
    document.write("<br>", `<h1 class = "divisao"> Resutado: `, numer1 / numer2,`</h2>`);
}


let num1 =parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

somar(num1, num2);
subtrair(num1, num2);
mult(num1, num2);
div(num1, num2);
