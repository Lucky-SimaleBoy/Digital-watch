let ghanta=document.getElementById('hours');
let sec=document.getElementById('second');
let min=document.getElementById('minits');

setInterval(()=>{
    let currenttime= new Date();

    ghanta.innerHTML=(currenttime.getHours()<10?'0':'')  +currenttime.getHours();
min.innerHTML=(currenttime.getMinutes()<10?'0':'')+currenttime.getMinutes();
sec.innerHTML=(currenttime.getSeconds()<10?'0':'')+currenttime.getSeconds();
},1000);
