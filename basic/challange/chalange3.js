
function rpgGame(humanChoice){
var yourChoice = humanChoice.id;
var botChoice = numberToChoice(randToRpsInt());
console.log(yourChoice);
console.log(botChoice);
 result = ansGen(yourChoice,botChoice);
console.log(result);
massage = finalMsg(result);
rpsFontEnd(yourChoice,botChoice,massage);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['rock','paper','sicors'] [number];
    
}

function ansGen(yourChoice,botChoice) {
    var rpgDatabase = {
        rock : {'sicors':1, 'rock':0.5, 'paper':0},
        paper : {'sicors': 0, 'rock':1, 'paper':0.5},
        sicors : {'sicors':0.5, 'rock':0, 'paper':1}
    };
    var yourChoice1 = rpgDatabase[yourChoice][botChoice];
    var botChoice1  = rpgDatabase[botChoice][yourChoice];

    //console.log(yourChoice1);
    //console.log(botChoice1);
    return [yourChoice1 , botChoice1];

}

function finalMsg([yourChoice1]){
    let fMsg;
    if(yourChoice1===0){
        console.log('you loss');
        return {'msg' : 'YOU LOSS' ,color:'red'} ;
    }
    else if(yourChoice1===0.5){
        console.log('DREW');
        return {'msg' : 'DREW' ,color:'yellow'} ;
    }
    else if(yourChoice1===1){
        console.log('you winn');
        return {'msg' : 'YOU WINN' ,color:'green'} ;
    }
}

function rpsFontEnd(yourChoiceImage , botChoiceImage , finalMsg){
    var rpsImageData = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'sicors' : document.getElementById('sicors').src  
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('sicors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var massageDiv = document.createElement('div');

   humanDiv.innerHTML = "<img src='" + rpsImageData[yourChoiceImage] + "' height=150 width=150 >";
   botDiv.innerHTML = "<img src='" + rpsImageData[botChoiceImage] + "' height=150 width=150 >";
   massageDiv.innerHTML = "<h1 style='color: "+ finalMsg['color'] + "; font-size: 60px padding 10px; '>" + finalMsg['msg'] + "</h1>";
  document.getElementById('flex-box-container-div').appendChild(humanDiv);
  document.getElementById('flex-box-container-div').appendChild(massageDiv);
  document.getElementById('flex-box-container-div').appendChild(botDiv);
  
}

