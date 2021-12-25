let grid = document.getElementById('gridWrapper')

window.addEventListener('keydown', (e) => {
    if (e.key === 'g') {
        grid.classList.toggle('is-visible')
    }
})