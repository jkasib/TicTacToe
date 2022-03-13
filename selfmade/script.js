let turnAudio = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let turn = "X";
let isGameOver = false;

let reset = document.querySelector('.reset');


// function to change the turn 



const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';
}



// function to check for a win


const checkWin = () => {

    let boxtexts = document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2, 0, 6, 0],
        [3, 4, 5, 0, 20, 0],
        [6, 7, 8, 0, 33, 0],
        [0, 3, 6, -14, 20, 90],
        [1, 4, 7, 0, 20, 90],
        [2, 5, 8, 14, 20, 90],
        [2, 4, 6, 0, 20, -45],
        [0, 4, 8, 0, 20, 45]
    ]

    wins.forEach(e => {
        if((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML) && boxtexts[e[2]].innerHTML !== ''){
            document.getElementsByClassName('turnInfo')[0].innerHTML = boxtexts[e[0]].innerHTML + ' has won';
            isGameOver = true;
            document.querySelector("img").style.width = '307px';
            document.getElementsByClassName('line')[0].style.transform = `translate(${e[3]}rem ${e[4]}rem) rotate(${e[5]}deg)`;
            console.log(e[3]);
        }
    })

}



// game logic


let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element => {

    let boxTexts = element.querySelector('.boxtext');

    element.addEventListener('click', () => {

        if(boxTexts.innerHTML === ''){
            boxTexts.innerHTML = turn;
            turn = changeTurn();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName('turnInfo')[0].innerHTML = 'Turn for ' + turn;
            }
        }
        
    })
})



reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    boxtexts.forEach(e => {
        e.innerHTML = '';
        isGameOver = false;
        turn = 'X';
        document.getElementsByClassName('turnInfo')[0].innerHTML = 'Turn for ' + turn;
        document.querySelector("img").style.width = '0px';
        document.querySelector('.line').style.width = '0vw';
    })

})