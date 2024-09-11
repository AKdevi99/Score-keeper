const scorediv = document.querySelector(".score");
let scoretext = scorediv.textContent;
let score = scoretext.split("to").map(s=>parseInt(s.trim(),10));


const winnertextdiv = document.querySelector(".winner");
const limit = document.querySelector("#playingto");
let limitvalue = parseInt(limit.value,10);
const player1 =  document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const reset = document.querySelector(".reset");


limit.addEventListener("change",function()
{
    limitvalue = parseInt(limit.value,10);
});


player1.addEventListener("click",function()
{
    score[0]+=1;
    if(score[0]<limitvalue)
    {
        scorediv.innerHTML = `<b class="b1">${score[0]}</b> to <b class="b2">${score[1]}</b>`;
    }
    else
    {
        scorediv.innerHTML = `<b class="b1">${score[0]}</b> to <b class="b2">${score[1]}</b>`;
        const b1 = document.querySelector(".b1");
        const b2 = document.querySelector(".b2");
        b1.style.color="green";
        b2.style.color="red";
        winnertextdiv.innerHTML = `<p><b>Player 1 has won</b></p>`;
        player1.disabled = true;
        player2.disabled = true;

    }
    
});

player2.addEventListener("click", function() {
    score[1] += 1;
    if(score[1]<limitvalue)
    {
        scorediv.innerHTML = `<b class="b1">${score[0]}</b> to <b class="b2">${score[1]}</b>`;
    }
    else
    {
        scorediv.innerHTML = `<b class="b1">${score[0]}</b> to <b class="b2">${score[1]}</b>`;
        const b1 = document.querySelector(".b1");
        const b2 = document.querySelector(".b2");
       
        b1.style.color = "red";
        b2.style.color = "green";
        winnertextdiv.innerHTML = `<p><b>Player 2 has won</b></p>`;
        player1.disabled = true;
        player2.disabled = true;

    }
    
}) ;

reset.addEventListener("click",function()
{
    score[0]=score[1]=0;
    scorediv.innerHTML = `<b class="b1">${score[0]}</b> to <b class="b2">${score[1]}</b>`;
    winnertextdiv.innerHTML = `<p>Use the buttons below to keep score</p>`;
    const b1 = document.querySelector(".b1");
    const b2 = document.querySelector(".b2");
    b1.style.color = "";
    b2.style.color = "";
    player1.disabled = false;
    player2.disabled = false;


}) ;

