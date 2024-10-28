// Seleciona o botão "Sim" e o elemento onde a mensagem será exibida
const botaoSim = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");

// Função para exibir a mensagem quando o usuário escolhe a resposta correta
function respostaCorreta() {
    mensagem.textContent = "Você fez a melhor escolha da sua vida!";
}

// Função para exibir a mensagem quando o usuário escolhe a resposta incorreta
function respostaIncorreta() {
    mensagem.textContent = "Resposta incorreta, tente novamente!";
}

// Função para mover o botão "Sim" para uma posição aleatória dentro da tela
function moverBotaoSim() {
    // Calcula as posições aleatórias para o botão "Sim"
    let x = Math.random() * (window.innerWidth - botaoSim.offsetWidth);
    let y = Math.random() * (window.innerHeight - botaoSim.offsetHeight);

    // Garante que o botão sempre estará dentro da área visível da tela
    x = Math.min(Math.max(0, x), window.innerWidth - botaoSim.offsetWidth);
    y = Math.min(Math.max(0, y), window.innerHeight - botaoSim.offsetHeight);

    // Define a nova posição do botão "Sim" usando as coordenadas ajustadas
    botaoSim.style.left = `${x}px`;
    botaoSim.style.top = `${y}px`;
}

// Configura um intervalo para mover o botão "Sim" a cada 1 segundo (1000 milissegundos)
setInterval(moverBotaoSim, 1000);






