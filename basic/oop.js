/*
Lớp là gì: 1 khuôn mẫu, bản thiết kế để tạo ra các đối tượng
đôi tượng là gì: 1 thể hiện của lớp

let a = new Array();
let a1 = new Array();
let b = a;

// new Array(): đối tượng
// a: biến tham chiếu tới đối tượng
// b: biến tham chiếu tới đối tượng
// Array: class

Student:
    + thuộc tính: đặc điểm của đối tượng
    + hành vi: showInfo, setName, setAge,


class Student {
    constructor(id, name, age, address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
    }
    showInfo() {
        return `ID: ${this.id} Name: ${this.name} Age: ${this.age}`          //string literal
    }
}

let s1 = new Student(1, "Quang Dang", 28, "28 NTP");
let s2 = new Student(2, "Huy", 28, "28 NTP");
let s3 = new Student(3, "Công", 28, "28 NTP");

console.log(s1.showInfo());



function Student(id, name, age, address) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;

    this.showInfo = function () {
        return `ID: ${this.id} Name: ${this.name} Age: ${this.age}`
    }
}

let s1 = new Student(1, "Quang Dang", 28, "28 NTP");
let s2 = new Student(2, "Huy", 28, "28 NTP");
let s3 = new Student(3, "Công", 28, "28 NTP");

console.log(s1.showInfo());
*/


// tạo class