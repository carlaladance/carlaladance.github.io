let genBtn = document.querySelector("#gen");
let output = document.querySelector("#outcome");
let words;
let lyrics;

function preload(){
  words=loadJSON("words.json");
}
function setup(){
  // createCanvas(300, 300);
  // fill(255);
  //
  // lexicon = new RiLexicon();
  // findRhymes();
  //
  // setInterval(findRhymes, 20);
}
function draw(){
  // background(100,0,100);
  //
  // textAlign(RIGHT);
  // textSize(36);
  // text(word, 280, 40);
  //
  // textAlign(LEFT);
  // textSize(14);
  // textLeading(17);
  // text(rhymes, 30, 73);
}
// function findRhymes() { // called by timer
//
//   var tmp = '';
//   do {
//     word = lexicon.randomWord();
//     tmp = lexicon.rhymes(word);
//   } while ( word && tmp.length < 3)
//
//   var arr = subset(tmp, 0, min(tmp.length, 13)); // max of 13 words
//   rhymes = arr.join("\n");
// }


function createLine(){
  let tense = Math.floor(Math.random()*3)
  console.log("line");
  for (var i = 0; i < 10; i++) {
    generate(tense)
  }
  output.innerHTML+="<br><br>"

}


function generate(tense){

  let seed = Math.floor(Math.random()*3)
  if(seed==0){
    let rnd=Math.floor(Math.random()*words.noun.length);
    let nounIdx0=Math.floor(Math.random()*words.prenoun0.length);
    let nounIdx=Math.floor(Math.random()*words.prenoun.length);
    output.innerHTML+=" "+words.prenoun0[nounIdx0]+words.prenoun[nounIdx]+" <span class='noun'>"+words.noun[rnd]+"</span>";
  }else if(seed==1){
    let rnd=Math.floor(Math.random()*words.adjective.length);
    output.innerHTML+=" <span class='adjective'>"+words.adjective[rnd]+"</span>";
  }else if(seed==2){
    let rnd=Math.floor(Math.random()*words.verbs.infinitive.length);
    if (tense==0) {
      output.innerHTML+=" <span class='verb1'>"+words.verbs.infinitive[rnd]+"</span>";
    }
    if (tense==1) {
      output.innerHTML+=" <span class='verb2'>"+words.verbs.past[rnd]+"</span>";
    }
    if (tense==2) {
      output.innerHTML+=" <div class='verb3'>"+words.verbs.present[rnd]+"</div>";
    }
  }
}

function randomColors(){
  output.querySelectorAll('*').forEach((e)=>{
    seed=Math.random()*(256*256*256-1);
    seed2=16777216-seed;
    e.style.color='#'+Math.floor(seed).toString(16)
    // e.style.backgroundColor='#'+Math.floor(seed/10).toString(16)
  })
}
