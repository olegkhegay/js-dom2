// const title = document.querySelector('#title')
const box = document.createElement('div')
const body = document.querySelector('body')
// const h1 = document.createElement('h1')

body.append(box)

// title.textContent = 'hello'

box.classList.add('wrapper')

// h1.textContent = 'hello'

// box.append(h1)

box.setAttribute('id', 'bebra')

// box.classList.remove('wrapper')

box.classList.toggle('wrapper')
box.classList.remove('wrapperr')
box.classList.remove('wrapper')

box.removeAttribute('class')

box.getAttribute('class')

box.classList.add('bebera')

const card = document.querySelector('.card')
const btn = document.querySelector('.card button')
const img = document.querySelector('.card img')
const name = document.querySelector('.card h1')
const changeBtn = document.querySelector('#change')
const originalSrc = img.src
const originalText = name.innerText

btn.onclick = () => {
    card.classList.toggle('red')

    if(name.innerText == originalText) {
        name.innerText = 'Xomyak'
    } else {
        name.innerText = originalText
    }

    if(img.src == originalSrc) {
        img.src = 'https://i.scdn.co/image/ab67616d0000b27333ed74e916aff25fb5b2831f'
    } else {
        img.src = originalSrc
    }
}

// changeBtn.onclick = () => {
//     img.src = "https://play-lh.googleusercontent.com/Kvfj3Hh7srxpswOoNkpuK6TWa7hzsHP_A17fM9jRap1WmWJuBAVck1ZYVM0Qnv9rzYU"
// }


const deleteBtn = document.querySelector("#del")

deleteBtn.onclick = () => {
    card.classList.toggle('none')
}