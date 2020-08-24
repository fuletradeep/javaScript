  function init(){
   return fetch(`https://api.covid19api.com/summary`)
    .then(res => res.json())
    .then(data => data);
}

.then(var value = init())
console.log(value);
var tc ;
tc = value.Global;
console.log(tc);
