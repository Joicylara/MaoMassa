// Criar classe para definir um modelo de objeto
class Personagem{
    constructor(name, level, power, img){
        // atributos ->  propriedades
        this.name = name;
        this.level = level;
        this.power = power;
        this.img = img;
    }

    // method
    falar(fala){
       console.log(`${this.name} esta dizendo: ${fala}`)
    }
}

class Perfume{
    constructor(name, price, story, img){
        this.name = name;
        this.price = price;
        this.story = story;
        this.img = img;
    }
}

const main = document.getElementsByTagName("main")[0];


// Criar a estrutura do card
function createCard(name, firstData, secondData, img){
    // criando tags div/img/h1
   const divContainer = document.createElement("div");
   const divInfos = document.createElement("div");
   const image = document.createElement("img");
   const title = document.createElement("h1");
   const firstInfo = document.createElement("p");
   const secondInfo = document.createElement("p");

   // alterando valores
   image.src = img;
   title.innerHTML = name;
   firstInfo.innerHTML = `${firstData}🚀` ;
   secondInfo.innerHTML = `${secondData}🔥`;

   // inserindo classes para estilizacao 
   divContainer.setAttribute("class", "card");
   divInfos.setAttribute("class", "infos");
   firstInfo.setAttribute("class", "firstInfo");
   secondInfo.setAttribute("class", "secondInfo");
   
   // adicionando elementos no html
   divInfos.appendChild(firstInfo);
   divInfos.appendChild(secondInfo);
   divContainer.appendChild(image)
   divContainer.appendChild(title)
   divContainer.appendChild(divInfos);
   main.appendChild(divContainer);
}
let listaPersonagens = []
// instanciando a classe Personagem -> criando novo objeto
const inputnamePersonagem = document.getElementById("input-name");
const inputlevelPersonagem = document.getElementById("input-level");

const naruto = new Personagem(inputnamePersonagem.value,inputlevelPersonagem);
listaPersonagens.push(naruto)
createCard(naruto.name, naruto.level, naruto.power, naruto.img);

const sazuke = new Personagem("Sazuke", "Sannin", "Chidori", "./sazuke.jpeg")
createCard(sazuke.name, sazuke.level, sazuke.power, sazuke.img);
listaPersonagens.push(sazuke)
const zabuza = new Personagem("Zabuza", "Jounnin", "Nevoa", "./zabuza.jpeg")
createCard(zabuza.name, zabuza.level, zabuza.power, zabuza.img);
listaPersonagens.push(zabuza)

console.log(listaPersonagens)
// instanciando a classe Perfume
const perfumeLuna = new Perfume("Luna", "120,00", "Natura", "./luna.jpeg")
createCard(perfumeLuna.name, perfumeLuna.price, perfumeLuna.story, perfumeLuna.img);
