
let zeit = document.querySelector('.zeit')
let btn = document.querySelector('#btn')

let num = 100

btn.addEventListener('click', () => {

    let forSetInterval = setInterval(() => {

        num--
        zeit.innerHTML = num + '%'

        if (num === 0) {
            clearInterval(forSetInterval)
        }
    }, 100)

})








