const rec = document.getElementById("header");
const count = document.getElementById("counts");
const line = document.getElementById("line");

const imgchange = function(){
    setTimeout(function(){
        rec.style.background = 'url(./img/plane1.jpg)no-repeat center/cover';
        line.style.height = '33px';
        count.innerText = '01';
    },0000)
    setTimeout(function(){
        rec.style.background = 'url(./img/plane2.jpg)no-repeat center/cover';
        line.style.height = '66px';
        count.innerText = '02';
    },3000)
    setTimeout(function(){
        rec.style.background = 'url(./img/plane3.webp)no-repeat center/cover';
        line.style.height = '99px';
        count.innerText = '01';
    },6000)
}; 
setInterval(imgchange, 9000);
