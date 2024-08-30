const char = document.querySelector('.char')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

let r = 0

right.addEventListener('click', () => {
    r += 5
    char.style.transform = `translateX(${r}rem)`
    right.style.animation = 'gede 0.2s linear'
    setTimeout(() => {
        right.style.animation = 'none'
    }, 600)

})


left.addEventListener('click', () => {
    r -= 5
    char.style.transform = `translateX(${r}rem)`
    left.style.animation = 'gede 0.2s linear'
    setTimeout(() => {
        left.style.animation = 'none'
    }, 600)
})