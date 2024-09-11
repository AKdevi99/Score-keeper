const scorediv = document.querySelector(".score");
let scoretext = scorediv.textContent;
let score = scoretext.split("to").map(s=>parseInt(s.trim(),10));

const limit = document.querySelector("#playingto");
const player1 =  document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const reset = document.querySelector(".reset");




player1.addEventListener("click",function()
{
    score[0]+=1;
    scorediv.innerHTML = `<b>${score[0]} to ${score[1]}</b>`;
});

player2.addEventListener("click", function() {
    score[1] += 1;
    scorediv.innerHTML = `<b>${score[0]} to ${score[1]}</b>`
}) ;

reset.addEventListener("click",function()
{
    score[0]=score[1]=0;
    scorediv.innerHTML = `<b>${score[0]} to ${score[1]}</b>`
}) ;

