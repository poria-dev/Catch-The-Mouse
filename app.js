const sec = document.querySelector(".sec")
const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")
const div = document.querySelectorAll(".sec>button")
const h2 = document.getElementById("h2")
const h3 = document.getElementById("h3")
const heart = document.querySelector(".heart")
const sp = document.querySelector(".sp")
const tr = new Audio("audio/hit-sound-fight.mp3")
const missed = new Audio("audio/Wrong Answer Sound Effect.mp3")
const win = new Audio("audio/Victory Sound Effects 4.mp3")
const lose = new Audio("audio/Sad Trombone Wah Wah Wah Fail Sound Effect.mp3")
const record = document.querySelector("#record")




let timer = 30
let x
let timer_random
let ran
let clicky = 0
let joon = 5



let save = localStorage.getItem("unique2")

record.innerHTML = ` ${save || 0}`



div.forEach((val) => {
    val.setAttribute("disabled", "disabled")
})

function random() {

    timer_random = setInterval(() => {

        setTimeout(() => {

            ran = parseInt(Math.random() * 9) + 1

            div.forEach((val, index) => {

                if (index == ran) {

                    val.innerHTML = `<img src="img/mouse.svg" alt="Hole">`

                } else {

                    val.innerHTML = `<img src="img/hole.svg" alt="Hole">`

                }

            })

        }, 380)

    }, 580)



}

btn.addEventListener("click", () => {

    alert("The game has started 🔴")

    div.forEach((val) => {
        val.removeAttribute("disabled")
    })

    if (timer > 0) {

        x = setInterval(() => {

            timer--

            h2.innerHTML = `⏱ ${timer}s`

            if (timer == -1) {

                alert("⏰ Time's up! Game Over!")

                clearInterval(x)
                clearInterval(timer_random)

                timer = 30
                clone()
                clicky = 0
                h2.innerHTML = "⏱ 30s"
                h3.innerHTML = clicky
                btn.removeAttribute("disabled")
                location.reload()

            }

        }, 1000)

        btn.setAttribute("disabled", "disabled")

        random()

    }

})

btn2.addEventListener("click", () => {

    alert("🔄 The game has been restarted.")

    clearInterval(x)
    clearInterval(timer_random)
    clone()
    timer = 30
    clicky = 0

    h2.innerHTML = "⏱ 30s"
    h3.innerHTML = clicky

    timer_random = null

    btn.removeAttribute("disabled")

    div.forEach((val) => {
        val.setAttribute("disabled", "disabled")
    })
    heart.innerHTML = `
    <i class="fa-solid fa-heart"></i>
    <i class="fa-solid fa-heart"></i>
    <i class="fa-solid fa-heart"></i>
    <i class="fa-solid fa-heart"></i>
    <i class="fa-solid fa-heart"></i>
    `;

    location.reload()

})

function f() {

    div.forEach((val, index) => {

        val.addEventListener("click", () => {

            if (clicky == 9) {
                win.play()
                win.currentTime = 0
                alert("🎉 Congratulations! You caught all 5 mice!")

                setTimeout(() => {
                    location.reload()
                }, 500);

            }

            if (index == ran) {

                clicky++

                h3.innerHTML = clicky

                tr.play()
                tr.currentTime = 0



            } else {


                joon--

                if (joon == 4) {

                    heart.innerHTML = `
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-regular fa-heart"></i>
                `;


                } else if (joon == 3) {

                    heart.innerHTML = `
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-heart"></i>
                `;



                } else if (joon == 2) {

                    heart.innerHTML = `
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    `;


                } else if (joon == 1) {

                    heart.innerHTML = `
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    `;


                } else if (joon == 0) {

                    heart.innerHTML = `
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-heart"></i>
                    `;
                    lose.play()
                    lose.currentTime = 0
                    alert("💔 Game Over! You lost all your hearts.")
                    clone()

                    setTimeout(() => {


                        location.reload()

                    }, 600)

                }

            }

        })

    })

}

f()



document.addEventListener("mousemove", (e) => {

    let x = e.clientX
    let y = e.clientY
    sp.style.left = `${x}px`
    sp.style.top = `${y}px`

})

function clone() {

    let save = localStorage.getItem("unique2")

    if (save == null || clicky > Number(save)) {

        localStorage.setItem("unique2", clicky)

    }

}




