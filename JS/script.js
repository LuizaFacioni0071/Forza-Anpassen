document.addEventListener('DOMContentLoaded', function() {
    
    const heroSection = document.querySelector('.hero-section');
    
    // Adicione os caminhos para as suas imagens aqui
    const images = [
        'images/carro1.png',
        'images/carro2.png',
        'images/carro3.png'
        // Adicione quantas imagens quiser
    ];

    let currentImageIndex = 0;

    function changeBackgroundImage() {
        // Define a primeira imagem como fundo inicial
        heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;

        // Troca para a próxima imagem no array
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Inicia a troca de imagens
    changeBackgroundImage(); 

    // Define o intervalo de tempo para a troca (em milissegundos)
    // 5000ms = 5 segundos
    setInterval(changeBackgroundImage, 5000);

});