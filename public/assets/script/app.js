console.log('OK')

const client = document.querySelector('.client').cloneNode(true)
document.querySelector('.container').appendChild(client)

const hero = document.querySelector('.hero')


const acakImage = () => {
    let kardus = [
        'hero1.png',
        'hero2.jpg',
        'hero3.jpg',
        'hero4.jpeg',
        'hero5.webp',
    ]

    const result = Math.floor(Math.random() * kardus.length)

    return `/img/` + kardus[result]
}


hero.addEventListener('click', function(){    
    this.style.animation = 'fade 1s linear'
    const res = acakImage()

    this.src = res
    
    setTimeout(() => {
        this.style.animation = 'none'
    }, 1200)
})