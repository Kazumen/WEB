//Завдання 1
const arr = [];
arr[0]=2;
arr[1]="Allah";
arr[2]=true;
arr[3]=null;
console.log(arr.length);
arr[4]=prompt("Введіть число");
console.log(arr[4]);
arr.shift();
console.log(arr);

//Завдання 2
let cities = ["Ternopil", "Lviv", "Warsaw"];
console.log(cities.join('*'));

//Завдання 3
const arr1=[2,3,4,5];
let value1=1;
let value2=1;
for(let count=0;count<arr1.length;count++){
    value1*=arr1[count];
}
console.log(value1);
let count=0;
while(arr1[count]!==undefined){
    value2*=arr1[count];
    count++;
}
console.log(value2);

//Завдання 4
for(let i=0;i<=15;i++){
    if(i%2==0){
        console.log(i+" is even");
    }
    else{
        console.log(i+" is odd");
    }
}

//Завдання 5
function randArray(k){
    let rand=[];
    for(let i=0;i<k;i++){
rand[i]=Math.floor(Math.random()*500)+1;
    }
    return rand;
}
let rand1=randArray(5);
console.log(rand1);

//Завдання 6
let a=prompt("Введіть число:");
let b=prompt("Введіть друге число:");
function raiseToDegree(a,b){
    return (a**b);
}
console.log(raiseToDegree(a,b));

//Завдання 7
function findMin(){
    let min=arguments[0];
    for(let i=0;i<arguments.length;i++){
        if (arguments[i]<min){
            min=arguments[i];
        }
    }
    return min;
}
console.log(findMin(1,6,8,4,1,8,9,5,7,-2,5));

//Завдання 8
function isUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}
let arrUnique=[1,6,7,8,5];
console.log(isUnique(arrUnique));

//Завдання 9
function lastElement(array, count = 1) {
    return array.slice(array.length - count);
}
console.log(lastElement([3, 4, 10, -5], 2));

//Завдання 10
function firstLetterToUpper(str){
    let array=str.split(" ");
    for (let i=0; i<array.length; i++){
        array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1);
    }
    return array.join(" ");
}
console.log(firstLetterToUpper("i love java script"));