// //Завдання 1
// let x=1;
// let y=2;
//
// let res1=String(x)+y;
// console.log(res1);
// console.log(typeof res1);
//
// let res2=Boolean(x)+String(y);
// console.log(res2);
// console.log(typeof res2);
//
// let res3=Boolean(x);
// console.log(res3);
// console.log(typeof res3);
//
// let res4=parseInt(Boolean(x) + String(y));
// console.log(res4);
// console.log(typeof res4);
//
// //Завдання 2
// let number = prompt("Введіть число:");
// console.log("Введене число: " + number);
// if(number%2==0&&number>=0){
//     console.log("Парне та додатнє");
// }
// else if(number%2==0&&number<0){
//     console.log("Парне, але від'ємне");
// }
// else{
//     console.log("Непарне і від'ємне");
// }
//
// //Завдання 3
// let isAdult = prompt("Введіть ваш вік:");
// if(isAdult<18){
//     console.log("Ви ще надто молоді");
// }
// else{
//     console.log("Ви досягли повнолітнього віку");
// }
//
// //Завдання 4
// let a = Number(prompt("Введіть довжину першої сторони трикутника:"));
// let b = Number(prompt("Введіть довжину другої сторони трикутника:"));
// let c = Number(prompt("Введіть довжину третьої сторони трикутника:"));
//
// if (isNaN(a) || isNaN(b) || isNaN(c)||a + b < c || a + c < b || b + c < a) {
//     alert("Ви некоректно ввели сторони трикутника")
// } else {
//     let p = (a + b + c) / 2;
//     console.log("Площа трикутника: " + Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3));
//     if (a ** 2 + b ** 2 === c ** 2 || a ** 2 + c ** 2 === b ** 2 || b ** 2 + c ** 2 === a ** 2){
//       console.log("Трикутник прямокутний");
//     }
//     else{
//         console.log("Трикутник не прямокутний");
//     }
// }

//Завдання 5
let hour = new Date().getHours();
console.log(hour);
if(hour>23&&hour<=5){
    console.log("Доброї ночі");
}
else if(hour>5&&hour<=11){
    console.log("Доброго ранку");
}
else if (hour>11&&hour <= 17) {
    console.log("Доброго дня");
}
else if (hour>17&&hour <= 23) {
    console.log("Доброго вечора");
}
