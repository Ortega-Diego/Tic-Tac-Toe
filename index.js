let tile = document.querySelectorAll('.tile')
let playerDisplay = document.getElementById('player')
let restart = document.getElementById('restart')
let game = document.getElementById('game')
let player = 'X'
let x = []
let o = []


window.addEventListener('DOMContentLoaded', markTile)
restart.addEventListener('click', restartGame)

let winVar = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7]
]

function markTile(){
    for (let i = 0; i < tile.length; i++) {
        tile[i].addEventListener('click', () => {
            if(player === 'X' && tile[i].innerHTML === ''){
                tile[i].innerHTML = 'X'
                x.push(Number(tile[i].id))
                currentPlayer()
                playerDisplay.innerHTML = 'Current Player: O'
            }else if(player === 'O' && tile[i].innerHTML === ''){
                tile[i].innerHTML = 'O'
                o.push(Number(tile[i].id))
                currentPlayer()
                playerDisplay.innerHTML = 'Current Player: X'
                
            }
            checkPoint()
            isOver()
        })
    }
}

function currentPlayer(){
    if(player === 'X'){
        player = 'O'
    }else{
        player = 'X'
    }
}

function checkPoint(){
    for (let i = 0; i < winVar.length; i++) {
        if(winVar[i].every(n => o.includes(n))){
            playerDisplay.innerHTML = 'O Wins'
        }else if(winVar[i].every(n => x.includes(n))){
            playerDisplay.innerHTML = 'X Wins'
        }
    }
}

function restartGame(){
    for (let i = 0; i < tile.length; i++) {
        tile[i].innerHTML = ''
    }
    x = []
    o = []
    player = 'X'
}

function isOver(){
    setTimeout(() => {
        if(playerDisplay.innerHTML === 'X Wins' || playerDisplay.innerHTML === 'O Wins'){
            restartGame()    
        }
    }, 1000);
}