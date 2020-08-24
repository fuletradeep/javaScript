const cartItems = document.querySelector('.cart-item');
const cartBtn = document.querySelector('.cart-btn');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
var productsDOM = document.querySelector('.product-center');



let dataBase = 
    [
    {
      "sys": { "id": "1" },
      "fields": {
        "title": "queen panel bed",
        "price": 10.99,
        "image": { "fields": { "file": { "url": "images/img1.jpg" } } }
      }
    },
    {
      "sys": { "id": "2" },
      "fields": {
        "title": "king panel bed",
        "price": 12.99,
        "image": { "fields": { "file": { "url": "images/img1.jpg" } } }
      }
    },
    {
      "sys": { "id": "3" },
      "fields": {
        "title": "single panel bed",
        "price": 12.99,
        "image": { "fields": { "file": { "url": "images/img1.jpg" } } }
      }
    },
    {
      "sys": { "id": "4" },
      "fields": {
        "title": "twin panel bed",
        "price": 22.99,
        "image": { "fields": { "file": { "url": "images/img1.jpg" } } }
      }
    },
    {
      "sys": { "id": "5" },
      "fields": {
        "title": "fridge",
        "price": 88.99,
        "image": { "fields": { "file": { "url": "images/img1.jpg" } } }
      }
    },
    {
      "sys": { "id": "6" },
      "fields": {
        "title": "dresser",
        "price": 32.99,
        "image": { "fields": { "file": { "url": "images/img1.jpg" } } }
      }
    },
    {
      "sys": { "id": "7" },
      "fields": {
        "title": "couch",
        "price": 45.99,
        "image": { "fields": { "file": { "url": "images/img1.jpg" } } }
      }
    },
    {
      "sys": { "id": "8" },
      "fields": {
        "title": "table",
        "price": 33.99,
        "image": { "fields": { "file": { "url": "images/img1.jpg" } } }
      }
    }
  ]
var dTitles = new Array;
var dPrice = new Array;
var dId = new Array; 
var dImg = new Array;
var dArray  = new Array; 
var inc=1;
var inct;
var dic=1;
var dict;
var amt;
var total=0;
let result = '';
let result1='';



let allData = getData();
let addProducts = getProducts(dId,dTitles,dImg,dPrice);
document.querySelector('.fa-cart-plus').addEventListener('click',openCart);
document.querySelector('.fa-window-close').addEventListener('click',closeCart);




function getData(){
for(let i=0;i<dataBase.length;i++){
  dTitles[i]  = dataBase[i]['fields']['title'];
}
//console.log(dTitles[0]);

for(let i=0;i<dataBase.length;i++){
  dPrice[i]  = dataBase[i]['fields']['price'];
}
//console.log(dPrice[3]);

for(let i=0;i<dataBase.length;i++){
  dId[i]  = dataBase[i]['sys']['id'];
}
//console.log(dId[0]);

for(let i=0;i<dataBase.length;i++){
  dImg[i]  = dataBase[i]['fields']['image']['fields']['file']['url'];
}
//console.log(dImg[1]);
        // ALL PRODUCTS LIST
for(let i=0;i<dataBase.length;i++){
dArray[i] = [dTitles[i],dPrice[i],dId[i],dImg[i]];
return dArray[i];
}  
}
 

function getProducts(dId,dTitles,dImg,dPrice){
  for(i=0;i<dataBase.length;i++){
  result +=
  `<article class="product">
  <div class="img-container">
  <img src=${dImg[i]} alt="" class="product-img">
      <button class="bag-btn" data-id=${dId[i]}>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              add to bag
      </button>
  </div>  
      <h3>${dTitles[i]}</h3>
      <h4>$${dPrice[i]}</h4>
</article>`
  }
  productsDOM.innerHTML=result;
  cart = productsDOM;
}
var deep = document.querySelectorAll('.bag-btn');
for(let i=0;i<deep.length;i++){
  deep[i].addEventListener('click',getBagButtons);
}
function getBagButtons(e){
    var id = e.target.dataset.id;
   console.log(id); 
   e.target.innerText='IN CART';
    e.target.disabled=true;  
    addToCart(id);
}

function addToCart(bId){
  //console.log(bId);
  result1 += 
  `<img src=${dImg[bId-1]} alt="" class="cart-img">
  <div>
      <h3>${dTitles[bId-1]}</h3>
      <h4>$${dPrice[bId-1]}</h4>
      <span class="remove-item">remove</span>
  </div>
  <div>
      <i class="fa fa-chevron-up" aria-hidden="true"></i>
      <p class="item-amount">1</p>
      <i class="fa fa-chevron-down" aria-hidden="true"></i>
  </div>
  `
  
  cartItems.innerHTML=result1;
  console.log(cartItems);
  cartOverlay.classList.add('transparentBcg');
  cartDOM.classList.add('show-cart');
  document.querySelector('.fa-chevron-up').addEventListener('click',this.increment);
  document.querySelector('.fa-chevron-down').addEventListener('click',this.decrement);
  document.querySelector('.remove-item').addEventListener('click',this.removeP);
   amt = dPrice[bId-1];
  console.log(amt);
  document.querySelector('.cart-totle').innerHTML=amt;
  inc=1;
  dic=1;
  yourTotal(amt,inc,dic);
 
}

function closeCart(){
  cartOverlay.classList.remove('transparentBcg');
  cartDOM.classList.remove('show-cart');
}

function openCart(){
  cartOverlay.classList.add('transparentBcg');
  cartDOM.classList.add('show-cart');
}



function increment(){
  dic=1;
  inct =  document.querySelector('.item-amount').innerHTML;
  inc = parseInt(inct);
 inc += 1;
 console.log(inc);
 document.querySelector('.item-amount').innerHTML = inc;
 yourTotal(amt,inc,dic);
 

}

function decrement(){
  inc =1;
   dict =  document.querySelector('.item-amount').innerHTML;
  dic = parseInt(dict);
 dic -= 1;
 if(dic <=0){
   console.log(this.cartItems);
 }else{
 console.log(dic);
 document.querySelector('.item-amount').innerHTML = dic;
 yourTotal(amt,inc,dic);
}
}

function yourTotal(amt,inc,dic){
   total = (amt*inc*dic);
  console.log(total);
  document.querySelector('.cart-totle').innerHTML=total;
}

//function removeCart(e){
  //console.log(e);
  //cartItems.remove(e);
  //document.querySelector('.cart-totle').innerHTML=0;
//}

function removeP(){
  console.log(this);
}

