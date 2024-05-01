<<<<<<< HEAD
var btn = document.querySelector('#start');
var container1 = document.querySelector('#home');
var container2 = document.querySelector('#quiz1')
btn.addEventListener('click', function() {
    if(container1.style.display === 'block') {
        container1.style.display = 'none';
    } else {
        container1.style.display = 'block';
    }

    if (container1.style.display === 'none') {
        container2.style.display = 'block'
    }
});

var container = document.getElementsByTagName("#quiz1");
var respostas = document.getElementsByTagName("button");
var indice = 0;

function respostaCerta() {
	alert("Resposta correta!");
	proximaPergunta();
}

function respostaErrada() {
	alert("Resposta incorreta!");
}

function proximaPergunta() {
	indice++;
	if (indice < container.length) {
		container[indice-1].style.display = "none";
		respostas[indice-1].style.display = "none";
		container[indice].style.display = "block";
		respostas[indice].style.display = "block";
	} else {
		alert("Fim do quiz!");
	}
};
=======
var btn = document.querySelector('#start');
var container1 = document.querySelector('#home');
var container2 = document.querySelector('#quiz1')
btn.addEventListener('click', function() {
    if(container1.style.display === 'block') {
        container1.style.display = 'none';
    } else {
        container1.style.display = 'block';
    }

    if (container1.style.display === 'none') {
        container2.style.display = 'block'
    }
});
>>>>>>> 11aebad176e456a67608c4a93885defc39e47f65
