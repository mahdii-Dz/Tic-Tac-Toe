let XWins = document.getElementById('X-wins')
let OWins = document.getElementById('O-wins')
let GameDraw = document.getElementById('Draw')
let ResBtn = document.getElementById('ResBtn')
let title = document.getElementById('title')

let X = parseInt(localStorage.getItem('XWins')) || 0;
let O = parseInt(localStorage.getItem('OWins')) || 0;
let drawsCount = parseInt(localStorage.getItem('Draws')) || 0;


if (XWins) XWins.innerText = X;
if (OWins) OWins.innerText = O;
if (GameDraw) GameDraw.innerText = drawsCount;

let turn = 'X';
let boxes = [];
let win = false;
function winner(num1,num2,num3){
        title.innerHTML = `'${boxes[num1]}' is the winner`;
        document.getElementById('item'+num1).style.backgroundColor = 'black';
        document.getElementById('item'+num2).style.backgroundColor = 'black';
        document.getElementById('item'+num3).style.backgroundColor = 'black';
        setInterval(() => {title.innerHTML += '.'},1000);
        setTimeout(() =>{window.location.reload()} ,4000);
        win = true;
        if(boxes[num1] === 'X'){
            X += 1;
            XWins.innerText = X;
            localStorage.setItem('XWins', X)
        }
        else{
            O += 1;
            OWins.innerText = O;
            localStorage.setItem('OWins', O)
        }
}
function winnerSituation(){
    for(let i = 1 ; i<10;i++){
        boxes[i] = document.getElementById('item'+i).innerHTML
    }
    if(boxes[1] == boxes[2] && boxes[2] == boxes[3] && boxes[1] != ''){
        winner(1,2,3)        
    }
    else if(boxes[4] == boxes[5] && boxes[5] == boxes[6] && boxes[4] != ''){
        winner(4,5,6)
    }
    else if(boxes[7] == boxes[8] && boxes[8] == boxes[9] && boxes[7] != ''){
        winner(7,8,9)
    }
    else if(boxes[1] == boxes[4] && boxes[4] == boxes[7] && boxes[1] != ''){
        winner(1,4,7)
    }
    else if(boxes[2] == boxes[5] && boxes[5] == boxes[8] && boxes[2] != ''){
        winner(2,5,8)
    }
    else if(boxes[3] == boxes[6] && boxes[6] == boxes[9] && boxes[3] != ''){
        winner(3,6,9)
    }
    else if(boxes[1] == boxes[5] && boxes[5] == boxes[9] && boxes[1] != ''){
        winner(1,5,9)
    }
    else if(boxes[3] == boxes[5] && boxes[5] == boxes[7] && boxes[3] != ''){
        winner(3,5,7)
    }
    else if(!win && boxes.slice(1).every(box => box != '')){
        title.innerHTML = 'The Game is Draw'; 
        drawsCount += 1;
        GameDraw.innerText = drawsCount;
        localStorage.setItem('Draws', drawsCount);
        setInterval(() => {
            title.innerHTML +='.';
        }, 1000);
        setTimeout(() => {
            window.location.reload()
        }, (3000));
    }
}

function game(id){
    let element = document.getElementById(id);
    if(!win){
        if(turn === 'X' && element.innerHTML === ''){
            element.innerText = 'X';
            element.style.background = 'lightgreen';
            title.innerHTML = "O's turn";
            turn = 'O';
        }
        else if(turn === 'O' && element.innerHTML === ''){
            element.innerText = 'O';
            element.style.background = 'lightblue'
            title.innerHTML = "X's turn";
            turn = 'X';
        }
        winnerSituation();
    }
}
ResBtn.addEventListener('click', () => {
    console.log('Reset button clicked');
    X = 0;
    O = 0;
    drawsCount = 0;
    XWins.innerText = X;
    OWins.innerText = O;
    GameDraw.innerText = drawsCount;
    localStorage.setItem('XWins', X);
    localStorage.setItem('OWins', O);
    localStorage.setItem('Draws', drawsCount);
    window.location.reload();
});