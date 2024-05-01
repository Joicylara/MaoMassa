let frase1 = "Não sou eu!";
let frase2 = "Eu tentei te ajudar desde o início!!";
let frase3 = "Já pensou que o monstro pode ser controlado?";

frase1=frase1.replace(" ", "").length;
frase2=frase2.replace(" ", "").length;
frase3=frase3.replace(" ", "").length;

if(frase1> frase2 && frase3){
    console.log("O suspeito é: Não sou eu!");
}else if(frase2> frase1 && frase3){
    console.log("O suspeito é:Eu tentei te ajudar desde o início!!");
}else if(frase3> frase1 && frase2){
    console.log("O suspeito é:Já pensou que o monstro pode ser controlado?");
}