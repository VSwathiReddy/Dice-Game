//for first dice
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

//for second dice
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage="images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage);

if(randomNumber1>randomNumber2){
  var text=document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  var text=document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
  var text=document.querySelector("h1").innerHTML="Draw!";
}
