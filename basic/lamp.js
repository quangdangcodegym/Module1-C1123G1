class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    getEnergy() {
        return this.energy;
    }
    setEnergy(e) {
        this.energy = e;
    }
    descreaseEnergy() {
        this.energy = this.energy - 1;
    }
}

class FlashLamp {
    constructor(id, battery) {
        this.battery = battery;
        this.status = false;
        this.id = id;
    }
    setBattery(b) {
        this.battery = b;
    }
    getBatteryInfo() {
        return this.battery.energy;
    }
    ligth() {
        if (this.status == true) {
            console.log("ĐÈN SÁNG");
        } else {
            console.log("ĐÈN TẮT");
        }
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}

let battery1 = new Battery(100);
let flashLamp1 = new FlashLamp(1, battery1);

let battery2 = new Battery(100);
let flashLamp2 = new FlashLamp(2, battery2);
flashLamp2.turnOn();

let battery3 = new Battery(100);
let flashLamp3 = new FlashLamp(3, battery3);



let arr = [flashLamp1, flashLamp2, flashLamp3];

function renderLamps() {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += "<tr>";
        str += `<td>${arr[i].id}</td>`;
        str += `<img  onclick='handleLampClick(${arr[i].id})' width='50px' src='${arr[i].status == true ? 'https://www.w3schools.com/js/pic_bulbon.gif' : 'https://www.w3schools.com/js/pic_bulboff.gif'}' />`;
        str += `<td style="vertical-align:center"><button onclick='removeLamp(${arr[i].id})'>Delete</button></td>`;
        str += "</tr>";
    }
    document.getElementById("main-lamps").innerHTML = str;
}


renderLamps();

function handleLampClick(id) {
    let lamp = null;
    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].id) {
            lamp = arr[i];
            break;
        }
    }
    lamp.status = !lamp.status;
    renderLamps();
}

let statusOnOff = false;
function handleClickAllOff() {
    statusOnOff = !statusOnOff;
    for (let i = 0; i < arr.length; i++) {
        if (statusOnOff == true) {
            arr[i].turnOn();
        } else {
            arr[i].turnOff();
        }
    }
    console.log(arr);
    renderLamps();
}


function removeLamp(id) {

}





