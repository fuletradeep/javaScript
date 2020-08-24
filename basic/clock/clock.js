function clock(){
    var hour = document.querySelector('#hour');
    var minute = document.querySelector('#minute');
    var second = document.querySelector('#second');

        var time =new Date();
        var h =time.getHours();
        var m =time.getMinutes();
        var s =time.getSeconds();

        hour.innerHTML=h;
        minute.innerHTML=m;
        second.innerHTML=s;

        console.log('a');
}
clock();
var interval = setInterval(clock,1000);