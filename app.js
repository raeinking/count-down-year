const newyear = "1 jan 2023";
function count(){
    const newtime = new Date(newyear);
    const now = new Date();

    const second = new Date(newtime - now) / 1000;

    const days = Math.floor(second / 3600 / 24);
    const hour = Math.floor(second / 3600) % 24;
    const minute = Math.floor(second / 60) % 60;
    const sec = Math.floor(second) % 60;

    document.getElementById("dayp").innerHTML= days;
    document.getElementById("hourp").innerHTML= hour;
    document.getElementById("minp").innerHTML= minute;
    document.getElementById("secp").innerHTML= sec;
}


count();

setInterval(count, 1000)