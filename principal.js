const btnAbrirMenu = document.querySelector('.abrir-menu-mb')
const btnFecharMenu = document.querySelector('.fechar-menu-mb')
const caixaMenu = document.querySelector('.header-mobile-itens')


// SUMINDO ELEMENTOS AO ABRIR MENU
const btnDuvidas = document.querySelector('.btnDuvidas')
const header = document.querySelector('.header-mobile')
const main = document.querySelector('main')

btnAbrirMenu.addEventListener('click', () => {
    if (caixaMenu.style.display == 'flex') {
        caixaMenu.style.display = 'none';
        document.body.style.overflow = "initial"
        btnDuvidas.style.display = 'block';

        header.style.display = 'block'
    } else {
        caixaMenu.style.display = 'flex';
        document.body.style.overflow = "hidden"
        btnDuvidas.style.display = 'none';

        header.style.display = 'none'
        
    }
})

btnAbrirMenu.onclick = () => {
    btnAbrirMenu.classList.toggle('ativo')
}

