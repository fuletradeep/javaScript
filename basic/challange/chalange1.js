function ageInDay(){
    var yourAge = prompt('plesr enter your age');
    
    var finalAge = (2020-yourAge)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are.. ' + finalAge + 'days old');
    h1.setAttribute('id','ageInDay');
    h1.appendChild(textAnswer);
    
    document.querySelector('#flex-box-result').appendChild(h1);

}

function reset(){
    document.querySelector('#ageInDay').remove();
}



