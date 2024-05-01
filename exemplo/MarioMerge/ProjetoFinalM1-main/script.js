const btnStart = document.querySelector('#start');
const sobre = document.querySelector('.sobre');
const btnSair = document.querySelector('.sair-info');
const main = document.querySelector('.main');
const btnContinuar = document.querySelector('.continuar-info');
const sectionQuiz = document.querySelector('.section_quiz');
const homeContext = document.querySelector('.home_contexto');
const header = document.querySelector('.header');
const pontos = document.querySelector('.pontos');

let pontuacao = 0;
let questaoAtual = 1;

btnStart.onclick = () => {
    sobre.classList.add('active');
    main.classList.add('active');
}

btnSair.onclick = () => {
    sobre.classList.remove('active');
    main.classList.remove('active');
}

btnContinuar.onclick = () => {
    sectionQuiz.classList.add('active');
    sobre.classList.remove('active');
    main.classList.remove('active');
    homeContext.classList.add('remover');
    header.classList.add('remover');
    displayNextQuestao();
}

function displayNextQuestao() {
    const quizAtual = document.querySelector(`.quiz${questaoAtual}`);
    const respostas = document.querySelectorAll('.respostas button');

    respostas.forEach(btn => {
        btn.addEventListener('click', () => {
            const respostaSelecionada = btn.getAttribute('data-resposta');
            const respostaCerta = quizAtual.querySelector('.resposta-certa').getAttribute('data-resposta');
            console.log('Resposta Selecionada:', respostaSelecionada);
            console.log('Resposta Correta:', respostaCerta);
            if (respostaSelecionada === respostaCerta) {
                pontuacao++;
                console.log('Resposta correta!');
            } else {
                console.log('Resposta incorreta!');
            }
            questaoAtual++;
            if (questaoAtual > 5) {
                pontos.textContent = `Pontuação: ${pontuacao} / 5`;
                return;
            }
            displayNextQuestao();
        });
    });
}



