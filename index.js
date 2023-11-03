var randomNumber1 = Math.floor(Math.random(randomNumber1) * (7-1)+1);

if(randomNumber1===1){
    document.querySelector("img").setAttribute("src", "images/dice1.png");

}else if(randomNumber1===2){
    document.querySelector("img").setAttribute("src", "images/dice2.png");

}else if(randomNumber1===3){
    document.querySelector("img").setAttribute("src", "images/dice3.png");

}else if(randomNumber1===4){
    document.querySelector("img").setAttribute("src", "images/dice4.png");

}else if(randomNumber1===5){
    document.querySelector("img").setAttribute("src", "images/dice5.png");

}else{
    document.querySelector("img").setAttribute("src", "images/dice6.png");

}

var randomNumber2 = Math.floor(Math.random(randomNumber1) * (7-1)+1);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 Wins!";

}else if(randomNumber2>randomNumber1){

    document.querySelector("h1").innerHTML="Player 2 Wins!";

}else{
    document.querySelector("h1").innerHTML="D R A W!";


}


switch(randomNumber2){
    case 1:
        document.getElementById("img2").setAttribute("src", "images/dice1.png");      
    break;

    case 2:
        document.getElementById("img2").setAttribute("src", "images/dice2.png");
    break;

    case 3:
        document.getElementById("img2").setAttribute("src", "images/dice3.png");
    break;

    case 4:
        document.getElementById("img2").setAttribute("src", "images/dice4.png");
    break;

    case 5:
        document.getElementById("img2").setAttribute("src", "images/dice5.png");
    break;

    case 6:
        document.getElementById("img2").setAttribute("src", "images/dice6.png");
    break;
}


