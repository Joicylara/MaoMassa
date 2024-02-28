class Fruta {
    constructor(nome, preco, quantidade, img) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.img = img;
    }
}

const main = document.getElementsByTagName("main")[0];
const h1 = document.createElement("h1");
// h1.textContent = "Frutas";
main.appendChild(h1); 

function card(nome, preco, quantidade, img) {
    const divPrincipal = document.createElement("div");
    const divInfo = document.createElement("div");
    const imagem = document.createElement("img");
    const h2 = document.createElement("h2"); 
    const p = document.createElement("p");
    const p1 = document.createElement("p");

 
    h2.innerHTML = `${nome}`;
    p.innerHTML = `${preco}`;
    p1.innerHTML = `${quantidade}`; 
    imagem.src = img;

    // Estilizando
    divPrincipal.classList.add("card");
    divInfo.classList.add("info");

    // Adicionando os elementos
    main.appendChild(divPrincipal);
    divPrincipal.appendChild(imagem);
    divPrincipal.appendChild(divInfo);
    divInfo.appendChild(h2);
    divInfo.appendChild(p);
    divInfo.appendChild(p1);
}

const tomate = new Fruta("Tomate", "Preço: 5.90", "Quantidade: 10", "img/tomate.jfif");
card(tomate.nome, tomate.preco, tomate.quantidade, tomate.img);
const morango = new Fruta("Morango", "Preço: 15.90", "Quantidade: 20", "img/morango.jfif"); 
card(morango.nome, morango.preco, morango.quantidade, morango.img);
const uva = new Fruta("Uva", "Preço: 8.90", "Quantidade: 7", "img/uva.jfif"); 
card(uva.nome, uva.preco, uva.quantidade, uva.img);
const ameixa = new Fruta("Ameixa", "Preço: 9.90", "Quantidade: 40", "img/ameixa.jfif"); 
card(ameixa.nome, ameixa.preco, ameixa.quantidade, ameixa.img);
