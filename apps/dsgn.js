const pen = document.querySelector('.pen')
const brush = document.querySelector('.brush')
const clear = document.querySelector('.clear')
const book = document.querySelector('.book')

let penAct = false
let brushAct = false

const redRandom = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, 0, 0)`
}
const blueRandom = () => {
    return `rgb(0, 0, ${Math.floor(Math.random() * 255)})`
}

pen.addEventListener('click', () => {
    penAct = true
    brushAct = false

    if(penAct){
        pen.style.backgroundColor = 'rgba(255, 0, 0, 0.502)'
        brush.style.backgroundColor = ''

        book.addEventListener('mouseover', function(){
            this.style.backgroundColor = redRandom()
        })
        book.addEventListener('click', function(){
            this.style.backgroundColor = redRandom()
        })

    }
    
})
brush.addEventListener('click', () => {
    penAct = false
    brushAct = true
    if(brushAct){
        brush.style.backgroundColor = 'rgba(0, 0, 255, 0.539)'
        pen.style.backgroundColor = ''

        book.addEventListener('mouseover', function(){
            this.style.backgroundColor = blueRandom()
        })
        book.addEventListener('click', function(){
            this.style.backgroundColor = blueRandom()
        })
    }
})
clear.addEventListener('click', () => {
    penAct = false
    brushAct = false
    pen.style.backgroundColor = ''
    brush.style.backgroundColor = ''
    book.style.backgroundColor = ''
})

