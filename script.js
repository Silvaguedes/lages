const animatedText = document.querySelector('.animated-text');
const words = ["Desenvolvedor FullStack", "Em fase de transição", "buscando trazer soluções web", "A procura de uma oportunidade no mercado de tecnologia."];
let wordIndex = 0;

function changeWord() {
    animatedText.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length; // Alterna as palavras em loop
}

setInterval(changeWord, 4000); // Troca a palavra a cada 4 segundos
