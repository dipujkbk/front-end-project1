let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
setInterval( ()=> {
    let date = new Date();
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();

    let hrotation = (30*(htime>12? (htime-12) : htime)) + mtime/2 + stime/120 ;
    let mrotation = mtime*6 + stime/30 ;
    let srotation = stime*6;
    console.log(date, htime, mtime, stime, hrotation)
    hour.style.transform = `rotate(${hrotation}deg)`;

    minute.style.transform = `rotate(${mrotation}deg)`;

    second.style.transform = `rotate(${srotation}deg)`;
}, 1000)