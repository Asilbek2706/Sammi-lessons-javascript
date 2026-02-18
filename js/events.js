const data = document.querySelector('[data-item="red"]')
const body = document.body.childNodes
console.log(body)
console.log(data.nextElementSibling)

/**const btns = document.querySelectorAll('button');

btns.forEach((item, idx) => {
    item.addEventListener('click', () => {
        console.log(idx + 1);
    }, {once: true} )
})

const link = document.querySelector('a')

link.addEventListener('click', event => {
    event.preventDefault()
    console.log('clicked')
})

const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay')

const callback = (event) => {
    console.log(event.currentTarget)
}

overlay.addEventListener('click', callback)

btn.addEventListener('click', callback)

btn.onClick = () => {
    console.log(1)
}

btn.onClick = () => {
    console.log(2)
}


const callback = (event, text) => {
    console.log(event.target)
    event.target.style.backgroundColor = 'red'
    event.target.textContent = text
    console.log('First click')
    event.target.remove()
}

let count = 0;

const deleteElement = (event) => {
    count++
    console.log(count)
    if (count == 4) {
        btn.removeEventListener('click', deleteElement)
    }
}

btn.addEventListener('click', deleteElement)*/