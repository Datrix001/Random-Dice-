var a = Math.random();
var b = Math.random();
a = Math.floor(a * 6);
b = Math.floor(b * 6);

// var imgCol = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
// var bb = imgCol[a];
// console.log(bb);
// by get getElementsByClassName method.
// document.getElementsByClassName('img1')[0].src = bb;
var bb1 = `images/dice${a+1}.png`;
var bb2 = `images/dice${b+1}.png`;

document.querySelector(".img1").src=bb1;
document.querySelector(".img2").src=bb2;



if(a>b){
  document.getElementById("topic").innerHTML = "🚩Player 1 Wins";
}else {
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
