let bgSound = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');
let turn = "X";
let isGameOver = false;
let resetBtn = document.getElementById('reset');




// Changing turn


const changeTurn = () => {
    return turn === "X" ? "0" : "X"; 
}


// Function to check for a win

const checkWin = () => {

    let boxTexts = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach((e) => {
        if((boxTexts[e[0]].innerHTML === boxTexts[e[1]].innerHTML) && (boxTexts[e[2]].innerHTML === boxTexts[e[1]].innerHTML) && boxTexts[e[0]].innerHTML !== ''){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerHTML + " Won";
            isGameOver = true;
            document.getElementsByTagName('img')[0].style.width = "200px";
        }
    })


}



// Game logic



const boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((elem) => {

    let boxText = elem.querySelector(".boxText");
    elem.addEventListener('click', () => {
        
        if(boxText.innerHTML === ''){
            boxText.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})




resetBtn.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    boxTexts.forEach((e) => {
        e.innerText = '';
        isGameOver = false;
        turn = "X";
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.getElementsByTagName('img')[0].style.width = "0px";
    })
})
