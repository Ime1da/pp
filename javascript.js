function Selecciono(element) {
    document.querySelectorAll('.barra  ul li').forEach(li => {
        if (li !== element) {
            li.classList.remove('seleccionado');
        }
    });

    element.classList.add('seleccionado');
    updateIndicator(element);

}

function updateIndicator(element) {
    const indicator = document.getElementById('indicador');
    const rect = element.getBoundingClientRect();
    const barraRect = document.querySelector('.barra').getBoundingClientRect();

    indicator.style.left = `${rect.left - barraRect.left-115}px`;
    indicator.style.width = `${rect.offsetWidth}px`;
}