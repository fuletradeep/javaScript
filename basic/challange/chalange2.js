

function add(){

    var image = document.createElement('img');
    var div = document.getElementById('box-cat-gen');
    
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
   
   
}

function remove(){
   
    var div = document.getElementById('box-cat-gen');
    var divChild = div.firstElementChild;
    divChild.remove();
    

}