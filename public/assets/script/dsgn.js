const pen = document.querySelector('.pen')
const brush = document.querySelector('.brush')
const clear = document.querySelector('.clear')

let penAct = false
let brushAct = false

pen.addEventListener('click', () => {
    penAct = true
    brushAct = false

    if(penAct){
        pen.style.backgroundColor = 'rgba(255, 0, 0, 0.502)'
        brush.style.backgroundColor = ''

    }
})
brush.addEventListener('click', () => {
    penAct = false
    brushAct = true
    if(brushAct){
        brush.style.backgroundColor = 'rgba(0, 0, 255, 0.539)'
        pen.style.backgroundColor = ''
    }
})
clear.addEventListener('click', () => {
    penAct = false
    brushAct = false
    pen.style.backgroundColor = ''
    brush.style.backgroundColor = ''
})


