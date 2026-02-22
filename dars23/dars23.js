const btn = document.querySelector('#btn')

const moveCar = () => {
    const car = document.querySelector('.car')
    let position = 0

    const animationId = setInterval(moving, 10)

    function moving() {
        if(position === 1000) {
            clearInterval(animationId)
        }else{
            position++
            car.style.left = position + 'px'
        }
    }
}

btn.addEventListener('click', moveCar)



// let timerId,
//     index = 0
//
// btn.addEventListener('click', () => {
//     const timerId = setInterval(logger, 500)
// })
//
// function logger() {
//     if (index === 5) {
//         clearInterval(timerId)
//     }
//     console.log('Hello World!')
//     index++
// }