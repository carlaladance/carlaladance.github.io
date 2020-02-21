let genBtn = document.querySelector("#gen");
let output = document.querySelector("#outcome");
let words;
let lyrics;

function preload(){
  words=loadJSON("words.json");
}
function setup(){}
function draw(){}


function createLine(){
  console.log("line");
  for (var i = 0; i < 10; i++) {
    generate()
  }
  output.innerHTML+="<br><br>"
}


function generate(){
  seed = Math.floor(Math.random()*3)
  if(seed==0){
    let rnd=Math.floor(Math.random()*words.noun.length);
    output.innerHTML+=" "+words.noun[rnd];
  }else if(seed==1){
    let rnd=Math.floor(Math.random()*words.adjective.length);
    output.innerHTML+=" "+words.adjective[rnd];
  }else if(seed==2){
    let rnd=Math.floor(Math.random()*words.verb.length);
    output.innerHTML+=" "+words.verb[rnd];
  }
}
