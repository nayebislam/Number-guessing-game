let first = document.querySelector(".first")
let input01 = document.querySelector(".first input")
let error01 = document.querySelector(".first .error")
let button01 = document.querySelector(".first button")



let second = document.querySelector(".second")
let heading02 = document.querySelector(".second h2")
let input02 = document.querySelector(".second input")
let error02 = document.querySelector(".second .error")
let button02 = document.querySelector(".second button")



let third = document.querySelector(".third")
let input03 = document.querySelector(".third input")
let error03 = document.querySelector(".third .error")
let button03 = document.querySelector(".third button")



let fourth = document.querySelector(".fourth")
let heading03 = document.querySelector(".fourth h2")
let input04 = document.querySelector(".fourth input")
let error04 = document.querySelector(".fourth .error")
let button04 = document.querySelector(".fourth button")



let result = document.querySelector(".result")
let winner = document.querySelector(".result h2")
let playeronevalu = document.querySelector(".result p")



let chance = 5
let chanceleft = document.querySelector(".chanceleft")



button01.addEventListener("click", function () {

    if (input01.value == "") {
        error01.innerHTML = "Please enter your name..!"
    } else {
        first.style.display = "none"
        second.style.display = "flex"
        heading02.innerHTML = input01.value
    }

})

button02.addEventListener("click", function () {

    if (input02.value == "") {
        error02.innerHTML = "Please enter a number between 0 to 9..!"
    } else {

        if (input02.value >= 0 && input02.value <= 9) {
            second.style.display = "none"
            third.style.display = "flex"
        } else {
            error02.innerHTML = "Please enter a number between 0 to 9..!"
        }
    }

})

button03.addEventListener("click", function () {

    if (input03.value == "") {
        error03.innerHTML = "Please enter your name..!"
    } else {
        third.style.display = "none"
        fourth.style.display = "flex"
        heading03.innerHTML = input03.value
    }

})

button04.addEventListener("click", function () {

    if (input04.value == "") {
        error04.innerHTML = "Please guess the number between 0 to 9..!"
    } else {

        if (input04.value >= 0 && input02.value <= 9) {
            error04.innerHTML = "Try again"
            input04.value = ""
            if (input04.value == input02.value) {
                fourth.style.display = "none"
                result.style.display = "flex"
                winner.innerHTML = `${input03.value} is winner`
                playeronevalu.innerHTML = `Player one number is ${input02.value}`
            } else {
                chance--
                chanceleft.innerHTML = `Chance left: ${chance}`
                input04.value = ""
                if (chance == 0) {
                    fourth.style.display = "none"
                    result.style.display = "flex"
                    winner.innerHTML = `${input01.value} is winner`
                    playeronevalu.innerHTML = `Player one number is ${input02.value}`
                }
            }
        } else {
            error04.innerHTML = "Please enter a number between 0 to 9..!"
        }
    }

})