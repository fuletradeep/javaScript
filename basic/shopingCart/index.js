(function () {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", () => {
    cart.classList.toggle("show-cart");
  });
})();
var flage = 0;
var output = [];
var total;
var finalTotal = 0;
var length = 1;
(function () {
  const cartBtn = document.querySelectorAll(".store-item-icon");

  cartBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      if (event.target.parentElement.classList.value === "store-item-icon") {
        let fulPath = event.target.parentElement.previousElementSibling.src;
        let pos = fulPath.indexOf("img") + 3;
        var partPath = fulPath.slice(pos);
        console.log(partPath);

        let title =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[0].textContent;

        console.log(title);

        let price =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[1].textContent;
        let finalPrice = price.slice(1).trim();
        console.log(finalPrice);

        let item = {};
        item.title = title;
        item.price = finalPrice;

        item.img = `img-cart${partPath}`;
        console.log(item);

        total = parseFloat(item.price);
        finalTotal += total;
        console.log(finalTotal);
        alert("item added sucsessfully");
        let div = document.querySelector(".cart");

        output += `
      <div class="cart-item d-flex justify-content-between text-capitalize my-3">
      <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
      <div class="item-text">

        <p id="cart-item-title" class="font-weight-bold mb-0">${item.title}</p>
        <span>$</span>
        <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
      </div>
      <a href="#" id='cart-item-remove' class="cart-item-remove">
        <i class="fas fa-trash"></i>
      </a>
      </div>
      <div class="cart-total-container d-flex justify-content-around text-capitalize mt-5">
            <h5>total</h5>
            <h5> $ <strong id="cart-total" class="font-weight-bold">${finalTotal}</strong> </h5>
          </div>
          <!--end cart total -->    
          <div class="cart-buttons-container mt-3 d-flex justify-content-between">
          <a href="#" id="clear-cart" class="btn btn-outline-secondary btn-black text-uppercase">clear cart</a>
          <a href="#" class="btn btn-outline-secondary text-uppercase btn-pink">checkout</a>
        </div>
          
      `;
       

        console.log(output);
        div.innerHTML = output;

        var itemTotal = document.querySelector(".item-total");
        itemTotal.innerHTML = finalTotal;

        var totalCount = document.querySelector("#item-count");
        totalCount.innerHTML = length;
        length++;
        console.log(length);

        document.getElementById("clear-cart").addEventListener("click", () => {
          output = "";
          length=0;
          finalTotal=0;
          itemTotal.innerHTML = finalTotal;
          totalCount.innerHTML = length;
          div.innerHTML = output;
        });
      }
    });
  });
})();
