console.log("It's working yay!")

function renderTime() {
    let currenTime = new Date();
    let diem = "AM";
    let h = currenTime.getHours();
    let m = currenTime.getMinutes();
    let s = currenTime.getSeconds();

    setTimeout('renderTime()',1000);

    if (h == 0) {
        h = 12;
    } else if (h > 12) {
        h = h - 12;
        diem="PM";
    }
    
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    let myClock = document.getElementById('clock');
        myClock.textContent = h + ":" + m + ":" + s + " " + diem;
        myClock.innerText = h + ":" + m + ":" + s + " " + diem;
}

renderTime();