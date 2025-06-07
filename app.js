let gameSeq = [];
let userSeq = [];
let colors = ["red", "yellow", "purple", "green"];

let level = 0;
let started = false;
let h2 = document.querySelector('h2');

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game started");
        started = true;
    }

    levelUp();

})

function levelUp() {
    level++;
    userSeq = [];

    h2.innerText = `Level ${level}`;

    let rndIdx = Math.floor(Math.random() * 4);
    let rndClr = colors[rndIdx];
    let rndBtn = document.querySelector(`.${rndClr}`);

    gameSeq.push(rndClr);
    // console.log(gameSeq);

    gameFlash(rndBtn);
}

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout( function() {
        btn.classList.remove("gameFlash");
    }, 250);

}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout( function() {
        btn.classList.remove("userFlash");
    }, 250);

}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
    // console.log("cur level : ", level);

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        h2.innerText = `GAme Over !  Your score was ${level} Press any key to start`;
        reset();
    }
}

function reset() {
    level = 0;
    userSeq = [];
    gameSeq = [];
    started = false;
}