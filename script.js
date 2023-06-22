let a1 = document.querySelector(".box1")
let a2 = document.querySelector(".box2")
let a3 = document.querySelector(".box3")
let b1 = document.querySelector(".box4")
let b2 = document.querySelector(".box5")
let b3 = document.querySelector(".box6")
let c1 = document.querySelector(".box7")
let c2 = document.querySelector(".box8")
let c3 = document.querySelector(".box9")

let player1 = document.querySelector(".player-1")
let player2 = document.querySelector(".player-2")
let BOT1 = document.querySelector(".player-3")

let boardCloser = document.querySelector(".board-closer")
let startMassage = document.querySelector(".massage-game-mode")
let counterBlock = document.querySelector(".counter-block")
let player1Calc = document.querySelector(".player1-calc")
let player2Calc = document.querySelector(".player2-calc")


let winMassageBlock = document.querySelector(".win-massage")
let winPlayer = document.querySelector(".playerID")
let winTimer = document.querySelector(".winMassageTimer")




let player = "X"
let gamemode = 0 // 0 - none , 1 - solo with pc, 2 - friendly game

function Game (el){
    if (el.id === "2"){
        gamemode = 2
        document.querySelector(".player1").classList.remove("clicked")
        el.classList.add("clicked")
        player1.style.opacity = "1"
        player1.style.scale = "1.2"
        player1.style.textShadow = "0 0 3px #5C63DC"
        boardCloser.style.display = "none"
        startMassage.style.display = "none"
        counterBlock.style.display = "flex"



    } else if (el.id === "1"){
        gamemode = 1
        document.querySelector(".player2").classList.remove("clicked")
        el.classList.add("clicked")
    } else {
        console.log("Error")
    }



    if (gamemode === 2){

    } else if (gamemode === 1){
        alert("coming soon!")
    }


}

function clear (){
    a1.textContent = " "
    a1.style.boxShadow = "none"
    a1.style.backgroundColor = "white"
    a2.textContent = " "
    a2.style.boxShadow = "none"
    a2.style.backgroundColor = "white"
    a3.textContent = " "
    a3.style.boxShadow = "none"
    a3.style.backgroundColor = "white"
    b1.textContent = " "
    b1.style.boxShadow = "none"
    b1.style.backgroundColor = "white"
    b2.textContent = " "
    b2.style.boxShadow = "none"
    b2.style.backgroundColor = "white"
    b3.textContent = " "
    b3.style.boxShadow = "none"
    b3.style.backgroundColor = "white"
    c1.textContent = " "
    c1.style.boxShadow = "none"
    c1.style.backgroundColor = "white"
    c2.textContent = " "
    c2.style.boxShadow = "none"
    c2.style.backgroundColor = "white"
    c3.textContent = " "
    c3.style.boxShadow = "none"
    c3.style.backgroundColor = "white"
}

function winMassage (player){
    winMassageBlock.style.display = "flex"
    boardCloser.style.display = "block"

    let winner = "none"
    if(player === "X"){
        player1Calc.textContent = Number(player1Calc.textContent)+1
    } else {
        player2Calc.textContent = Number(player2Calc.textContent)+1
    }


    winPlayer.textContent = player
    winTimer.textContent = "3"
    let timeron = setInterval(()=>{
        winTimer.textContent = Number(winTimer.textContent)-1
    }, 1000)
    setTimeout(()=>{
        winMassageBlock.style.display = "none"
        boardCloser.style.display = "none"
        clear()
        clearInterval(timeron)
    }, 4000)

}

function getObj (obj){
    obj.innerText = player

    if(player === "O"){
        player2.style.opacity = "0.7"
        player2.style.scale = "1"
        player2.style.textShadow = "none"
        player1.style.opacity = "1"
        player1.style.scale = "1.2"
        player1.style.textShadow = "0 0 3px #5C63DC"

        boardCloser.style.display = "none"
        startMassage.style.display = "none"
        counterBlock.style.display = "flex"
    } else {
        player1.style.opacity = "0.7"
        player1.style.scale = "1"
        player1.style.textShadow = "none"
        player2.style.opacity = "1"
        player2.style.scale = "1.2"
        player2.style.textShadow = "0 0 3px #5C63DC"

        boardCloser.style.display = "none"
        startMassage.style.display = "none"
        counterBlock.style.display = "flex"
    }

    if(a1.innerText === player && a2.innerText === player && a3.innerText === player){
        a1.style.boxShadow = "0 0 15px 5px #8f5e65";
        a2.style.boxShadow = "0 0 15px 5px #8f5e65";
        a3.style.boxShadow = "0 0 15px 5px #8f5e65";
        a1.style.backgroundColor = "#8f5e65";
        a2.style.backgroundColor = "#8f5e65";
        a3.style.backgroundColor = "#8f5e65"
        winMassage(player)

    } else if (b1.innerText === player && b2.innerText === player && b3.innerText === player){
        b1.style.boxShadow = "0 0 15px 5px #8f5e65";
        b2.style.boxShadow = "0 0 15px 5px #8f5e65";
        b3.style.boxShadow = "0 0 15px 5px #8f5e65";
        b1.style.backgroundColor = "#8f5e65";
        b2.style.backgroundColor = "#8f5e65";
        b3.style.backgroundColor = "#8f5e65"
        winMassage(player)

    } else if (c1.innerText === player && c2.innerText === player && c3.innerText === player){
        c1.style.boxShadow = "0 0 15px 5px #8f5e65";
        c2.style.boxShadow = "0 0 15px 5px #8f5e65";
        c3.style.boxShadow = "0 0 15px 5px #8f5e65";
        c1.style.backgroundColor = "#8f5e65";
        c2.style.backgroundColor = "#8f5e65";
        c3.style.backgroundColor = "#8f5e65"
        winMassage(player)

    } else if (a1.innerText === player && b1.innerText === player && c1.innerText === player){
        a1.style.boxShadow = "0 0 15px 5px #8f5e65";
        b1.style.boxShadow = "0 0 15px 5px #8f5e65";
        c1.style.boxShadow = "0 0 15px 5px #8f5e65";
        a1.style.backgroundColor = "#8f5e65";
        b1.style.backgroundColor = "#8f5e65";
        c1.style.backgroundColor = "#8f5e65"
        winMassage(player)

    } else if (a2.innerText === player && b2.innerText === player && c2.innerText === player){
        a2.style.boxShadow = "0 0 15px 5px #8f5e65";
        b2.style.boxShadow = "0 0 15px 5px #8f5e65";
        c2.style.boxShadow = "0 0 15px 5px #8f5e65";
        a2.style.backgroundColor = "#8f5e65";
        b2.style.backgroundColor = "#8f5e65";
        c2.style.backgroundColor = "#8f5e65"
        winMassage(player)

    } else if (a3.innerText === player && b3.innerText === player && c3.innerText === player){
        a3.style.boxShadow = "0 0 15px 5px #8f5e65";
        b3.style.boxShadow = "0 0 15px 5px #8f5e65";
        c3.style.boxShadow = "0 0 15px 5px #8f5e65";
        a3.style.backgroundColor = "#8f5e65";
        b3.style.backgroundColor = "#8f5e65";
        c3.style.backgroundColor = "#8f5e65"
        winMassage(player)

    } else if (a1.innerText === player && b2.innerText === player && c3.innerText === player){
        a1.style.boxShadow = "0 0 15px 5px #8f5e65";
        b2.style.boxShadow = "0 0 15px 5px #8f5e65";
        c3.style.boxShadow = "0 0 15px 5px #8f5e65";
        a1.style.backgroundColor = "#8f5e65";
        b2.style.backgroundColor = "#8f5e65";
        c3.style.backgroundColor = "#8f5e65"
        winMassage(player)

    } else if (a3.innerText === player && b2.innerText === player && c1.innerText === player){
        a3.style.boxShadow = "0 0 15px 5px #8f5e65";
        b2.style.boxShadow = "0 0 15px 5px #8f5e65";
        c1.style.boxShadow = "0 0 15px 5px #8f5e65";
        a3.style.backgroundColor = "#8f5e65";
        b2.style.backgroundColor = "#8f5e65";
        c1.style.backgroundColor = "#8f5e65"
        winMassage(player)

    }


    if (player === "X"){
        player = "O"
    } else {
        player = "X"
    }
}





