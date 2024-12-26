document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.topbar button');
    const sections = document.querySelectorAll('.content-section');
    const hero = document.querySelector('.hero');
    const centerTitle = document.getElementById('center-title');
    const topbarTitle = document.getElementById('topbar-title');
    const topbar = document.querySelector('.topbar');

    // Função para exibir uma seção e ajustar layout
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
        hero.style.display = 'none'; // Esconde o hero
        centerTitle.classList.add('hidden'); // Esconde o título central
        topbarTitle.style.display = 'block'; // Exibe o título na topbar
        topbar.classList.add('content-visible'); // Move os botões para a direita
    }

    // Função para resetar o layout inicial
    function resetView() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        hero.style.display = 'flex'; // Mostra o hero novamente
        centerTitle.classList.remove('hidden'); // Mostra o título central
        topbarTitle.style.display = 'none'; // Esconde o título da topbar
        topbar.classList.remove('content-visible'); // Reseta os botões para a esquerda
    }

    // Adiciona evento aos botões
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Evento para clicar no título da topbar e voltar para o início
    topbarTitle.addEventListener('click', resetView);

    // Inicializa o estado inicial
    resetView();
});
