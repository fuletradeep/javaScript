document.querySelector('.number-fact').addEventListener('submit',e=>{
    e.preventDefault();
      var text = document.querySelector("#text").value;
      console.log(text);
    data(text);

      async function data(text){
          var res = await fetch(`http://numbersapi.com/${text}`)
          console.log(res);
          var data = await res.text();
          console.log(data);
          var value = document.querySelector('#value');
          value.innerHTML = data;
          value.classList.add('color');
          value.classList.remove('value');
      }
    
});