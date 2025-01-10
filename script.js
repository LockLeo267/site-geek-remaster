const bntPrev = document.querySelector('.btn-left');  // Selecionando o primeiro botão (se houver mais, você pode usar querySelectorAll)
const pintoVerde = document.querySelectorAll('.eita2');  // Pegando todos os elementos com a classe eita2

function testepenis() {
    // Esconde todos os elementos com a classe .eita2
    pintoVerde.forEach(function(element) {
        element.style.display = 'none';
    });
}

// Adiciona o evento de clique ao botão
bntPrev.addEventListener('click', testepenis);
