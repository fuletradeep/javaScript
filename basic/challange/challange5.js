document.querySelector('#hit').addEventListener('click',blackjackHit);
document.querySelector('#deal').addEventListener('click',blackjackdeal);
document.querySelector('#greed').addEventListener('click',blackjackgreed);

let blackjackGame = {
     'you' : {'spanScore':'#yourResult' , 'div':'.blackjack-you','score':0 },
     'dealer' : {'spanScore':'#dealerResult' , 'div':'.blackjack-dealer','score':0 },
      'cardsValue' : ['2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , 'j' , 'Q' , 'K' , 'A'], 
      'cardsMap' : {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'j':10, 'Q':10, 'K':10, 'A':[1,11]},
      'togreed': false,
      'tousedOut' : false,
      
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const sound = new Audio('../sounds/a.mp3');
const soundWin = new Audio('../sounds/cheer2.mp3');
const soundLoss = new Audio('../sounds/loss.WAV');
console.log(YOU.score);


function blackjackHit(){
    if(blackjackGame['togreed']===false){
        let card = rendomCard();
        blackjackShow(card,YOU);
        updateScore(card,YOU);
    }
  
}
 
function blackjackShow(card,activePlayer){
    if(activePlayer['score']<21){
    let image = document.createElement('img');
    image.src=`../images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(image);
    sound.play();
    }
}


function blackjackdeal(){
    blackjackGame['togreed']=false;
   let imageRemove = document.querySelector('.blackjack-you').querySelectorAll('img');
   let imageRemove1 = document.querySelector('.blackjack-dealer').querySelectorAll('img');
   for(let i=0;i<imageRemove.length;i++){
   imageRemove[i].remove();
   }
   for(let i=0;i<imageRemove1.length;i++){
    imageRemove1[i].remove();
    }
   YOU['score']=0;
   DEALER['score']=0;

   document.querySelector('#yourResult').textContent = 0;
   document.querySelector('#dealerResult').textContent = 0; 
    
}

function rendomCard(){
    let random = Math.floor(Math.random() * 13);
    return blackjackGame['cardsValue'][random];
}

function updateScore(card,activePlayer){
    
    if(card === 'A'){
         if(activePlayer['score'] < 10){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
          
        }
        else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
            
        }
    }
    else{
    activePlayer['score'] += blackjackGame['cardsMap'][card];
    }

    if(activePlayer['score'] > 21){
        
       showScore1(activePlayer);   
    }
    else{
        showScore(activePlayer);
    }
}
function showScore(activePlayer){
    document.querySelector(activePlayer['spanScore']).textContent = activePlayer['score'];
}

function showScore1(activePlayer){
    document.querySelector(activePlayer['spanScore']).textContent = 'BUST!';
    document.querySelector(activePlayer['spanScore']).style.color = 'red';
}


function blackjackgreed(){
    blackjackGame['togreed']=true;
    if(blackjackGame['togreed']===true){
    let card = rendomCard();
    console.log(card);
    blackjackShow(card,DEALER);
    updateScore(card,DEALER);
   
    if(DEALER['score']>15){
        blackjackGame['tousedOut']=true;
        let winn;
        winn = decideWinner();
        finalResult(winn);
    }
}

}

function decideWinner(){
    let winner;
    if(YOU['score'] <= 21 && DEALER['score']<=21){
        if(YOU['score'] >= DEALER['score']){
            winner=YOU;
        }
        else if(YOU['score'] < DEALER['score']){
            winner=DEALER;   
        }
    }
    else if(YOU['score'] <= 21 && DEALER['score']>21){
            winner=YOU;
    }
    else if(YOU['score'] > 21 && DEALER['score']<=21){
            winner=DEALER;   
    }
    else if(YOU['score'] > 21 && DEALER['score']>21 || YOU['score']=== DEALER['score']){
            document.querySelector('#finalResult').textContent='OHHH IT`S DREW';
            document.querySelector('#finalResult').style.color='yellow';
    }
    else if(YOU['score'] <= 21 && DEALER['score']>=21 ){
        winner=YOU;
    }
    return winner;
}
function finalResult(winner){
    let msg;
    if(winner===YOU){
         msg='YOU WON';
         let a=document.querySelector('#won').textContent;
         let b = parseInt(a);
         b+=1;
         document.querySelector('#won').textContent=b;
         
         soundWin.play();
     }
     else if(winner===DEALER){
          msg = 'YOU LOSS';
          let a=document.querySelector('#loss').textContent;
         let b = parseInt(a);
         b+=1;
         document.querySelector('#loss').textContent=b;
          soundLoss.play();
     }
     else{
         msg = 'drew';
         let a=document.querySelector('#draw').textContent;
         let b = parseInt(a);
         b+=1;
         document.querySelector('#draw ').textContent=b;
     }
     document.querySelector('#finalResult').textContent = msg;
}

