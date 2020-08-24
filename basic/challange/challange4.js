var allBtn = document.getElementsByTagName('button');
var copyBtn = [];

for(var i=0 ; i<allBtn.length ; i++)
{
    copyBtn.push(allBtn[i].classList[1]);
}
console.log(copyBtn);
//console.log(allBtn);
function colourGen(btnType){
   
    console.log(btnType.value); 
    if(btnType.value === 'red'){
        btnRed();
    }  
    else if(btnType.value === 'green'){
        btnGreen();
    }
    else if(btnType.value === 'yellow'){
        btnYellow();
    }
    else if(btnType.value === 'blue'){
        btnBlue ();
    }
    else if(btnType.value==='reset'){
        btnReset();
    }
    else if(btnType.value==='random'){
        btnRandom();
    }

}

function btnRed(){
    for(var i=0; i<allBtn.length;i++){
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add('btn-danger');
    }
}

function btnGreen(){
    for(var i=0; i<allBtn.length;i++){
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add('btn-success');
    }
}

function btnYellow(){
    for(var i=0; i<allBtn.length;i++){
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add('btn-warning');
    }
}

function btnBlue(){
    for(var i=0; i<allBtn.length;i++){
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add('btn-primary');
    }
}

function btnRandom(){
    
     var randChoice = allBtn[Math.floor(Math.random()*4)];

     console.log(randChoice.classList[1]);
    for(var i=0; i<allBtn.length;i++){
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add(randChoice.classList[1]);
}
}

function btnReset(){
    for(var i=0; i<allBtn.length;i++){
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add(copyBtn[i]);

}
}