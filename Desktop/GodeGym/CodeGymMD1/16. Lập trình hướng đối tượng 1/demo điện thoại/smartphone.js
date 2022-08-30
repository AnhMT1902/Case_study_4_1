function chargingIphone() {
    let power = +document.getElementById("charging1").innerHTML;
    power += Math.floor(Math.random() * 10);
    document.getElementById('charging1').innerHTML = power;
    while (power > 100) {
        power = 100;
        alert(' Full battery');
        document.getElementById('charging1').innerHTML = power;
    }
}

function chargingSamsung() {
    let power2 = +document.getElementById("charging2").innerHTML;
    power2 += Math.floor(Math.random() * 10);
    document.getElementById('charging2').innerHTML = power2;
    while (power2 > 100) {
        power2 = 100;
        alert(' Full battery');
        document.getElementById('charging2').innerHTML = power2;
    }
}

function reductBatteryIphone() {
    let batteryIphone = +document.getElementById("charging1").innerHTML;
    batteryIphone -= 1;
    document.getElementById('charging1').innerHTML = batteryIphone;
    if (batteryIphone <= 0) {
        alert("sạc điện thoại để tiếp tục sử dụng");
        document.getElementById('charging1').innerHTML = 0;
    }
}

function reductBatterySamsung() {
    let batterySamsung = +document.getElementById("charging2").innerHTML;
    batterySamsung -= 1;
    document.getElementById('charging2').innerHTML = batterySamsung;
    if (batterySamsung <= 0) {
        alert("sạc điện thoại để tiếp tục sử dụng");
        document.getElementById('charging2').innerHTML = 0;
    }
}

setInterval(reductBatteryIphone, 3000);
setInterval(reductBatterySamsung, 3000);

function powerButtonIphone() {
    let value = document.getElementById("onIphone").value;
    if (value == "false") {
        alert("Turn on");
        document.getElementById("onIphone").value = true;
    } else {
        alert("Turn off");
        document.getElementById("onIphone").value = false;
    }
    return value;
}

function powerButtonSamsung() {
    let value = document.getElementById("onSamsung").value;
    if (value == "false") {
        alert("Turn on");
        document.getElementById("onSamsung").value = "true";
    } else {
        alert("Turn off")
        document.getElementById("onSamsung").value = "false";
    }
    console.log(value);
    return value;
}

function sentMesageIphone() {
    let value = document.getElementById("onIphone").value;
    if (value =='true') {
        let mesageIphone = document.getElementById("mesageIphone").value;
        document.getElementById("screen__Mesage__Iphone").innerHTML += `<p>iphone: ${mesageIphone}</p>`;
    } else {
        alert("bật điện thoại lên");
    }
}

function sentMesageSamsung() {
    if (powerButtonSamsung()) {
        let mesageSamsung = document.getElementById("mesageSamsung").value;
        document.getElementById("screen__mesage__Samsung").innerText += "samsung: " + mesageSamsung + "<br>";
    } else {
        alert("bật điện thoại lên");
    }
}

function isTime() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    return time;
}

function showTime() {
    let times = document.getElementsByClassName("time");
    times[0].innerHTML = isTime();
    times[1].innerHTML = isTime();
}

showTime();