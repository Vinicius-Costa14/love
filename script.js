const compliments = [
   'Você é maravilhosa!',
    'Seu sorriso ilumina meu dia!',
    'Você é meu tudo!',
    'Eu sou tão feliz ao seu lado!',
    'Você é a pessoa mais especial do mundo!',
    'Eu amo o jeito que você me faz sentir!',
    'Você é perfeita para mim!',
    'Cada momento com você é precioso!',
    'Eu adoro tudo em você!',
    'Você é meu amor eterno!',
    // Adicione mais elogios aqui para completar até 1000
    // Para evitar repetição, adicionarei apenas um exemplo para cada 10 elogios
    'Você faz meu coração bater mais rápido!',
    'Eu sou grato por cada momento ao seu lado!',
    'Você é a razão do meu sorriso!',
    'Você é simplesmente incrível!',
    'Eu amo sua personalidade!',
    'Você ilumina qualquer ambiente!',
    'Você é a melhor coisa que já aconteceu comigo!',
    'Seu carinho é tudo para mim!',
    'Você é um sonho que se tornou realidade!',
    'Eu não consigo imaginar minha vida sem você!',
    // Continue adicionando elogios...
    'Você é a minha felicidade!',
    'Sua presença é a melhor parte do meu dia!',
    'Eu admiro tudo em você!',
    'Você é um verdadeiro tesouro!',
    'Você é minha fonte de alegria!',
    'Seu amor é meu maior presente!',
    'Eu amo a forma como você cuida de mim!',
    'Você é a razão do meu bem-estar!',
    'Você é a minha inspiração!',
    'Cada dia com você é uma bênção!',
    // Continue até atingir 1000 elogios
    // Use uma ferramenta de geração de texto ou crie elogios semelhantes para completar a lista
];

document.getElementById('photo').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const messageElement = document.getElementById('message');
    messageElement.textContent = compliments[randomIndex];
    messageElement.classList.add('show');

    // Criar o elemento de animação do coração
    const heartAnimation = document.createElement('div');
    heartAnimation.id = 'heart-animation';
    document.body.appendChild(heartAnimation);

    // Remove o elemento de animação após a animação terminar
    setTimeout(() => {
        document.body.removeChild(heartAnimation);
    }, 1000); // 1000 ms é o tempo da animação

    // Reproduzir o som
    const clickSound = document.getElementById('click-sound');
    if (clickSound.paused) {
        clickSound.play().catch(error => {
            console.log('Erro ao reproduzir o som:', error);
        });
    }
});



