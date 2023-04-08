const btn = document.querySelector('.btn')
btn.addEventListener('mousemove', (e) => {
    const x = e.pageX - btn.offsetLeft
    const y = e.pageY - btn.offsetTop
    // console.log(x, y)
    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--y', y + 'px')
})