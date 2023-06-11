
const adj = ['great ', 'awsome ','fasctinating ', 'perfect ', 'fabioulus ', 'astonishing '];
const phrase = ['today is ', 'right now is ' , 'now is ', 'this moment is ', 'this time is '];
const rest = ['to start becoming what you want ', 'to be who you always wanted ', 'to accomplish your goals ', 'to practice healthy boundries ', 'to believe in yourself ', 'to help your beloved ones ','to plan ahead '];

function printMessage(){
    let secretMessage = phrase[Math.floor(Math.random(10)*phrase.length)]+ adj[Math.floor(Math.random(10)*adj.length)] + rest[Math.floor(Math.random(10)*rest.length)];

    document.getElementById("div").innerHTML = secretMessage;
    document.getElementById("div").style.color = 'black';
    document.getElementById("div").style.fontFamily = 'cursive';
    document.getElementById("div").style.textAlign = 'center';
    document.getElementById("div").style.justifyContent = 'center';
    document.getElementById("div").style.fontSize = '30px';   
    document.getElementById("div").style.margin = '60px';   

}