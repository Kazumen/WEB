//Завдання 1
let testClass={
    name:"Allah",
    year:2020,
    countOfCars:5
};
function propsCount(currentObject){
    let count=0;
    for(let key in currentObject){
        count++;
    }
    return count;
}
console.log(propsCount(testClass));

//Завдання 2
let person={
    name:"Kalush",
    surname:"Loshka",
    age:25,
    dateOfBirth:"22.03.1997",
    countOfChildren:0
};
function showProps(obj){
    let keys=[];
    let values=[];
    for(let key in obj){
        keys.push(key);
        values.push(obj[key]);
    }
    for (let i=0; i<keys.length;i++){
        console.log("Key: "+ keys[i] +"  Value: "+ values[i]);
    }
}
showProps(person);

//Завдання 3
class Person{
    constructor(name,surname) {
        this.name=name;
        this.surname=surname;
    }
    showFullName(){
        console.log(this.name + " " + this.surname)
    }
}

class Student extends Person{
    constructor(name,surname,entryYear) {
        super(name,surname);
        this.entryYear=entryYear;
    }
    showFullName(middleName) {
        console.log(this.surname+ " " + this.name + " " + middleName);
    }
    showCourse(){
        let thisYear=new Date().getFullYear();
        return thisYear-this.entryYear;
    }
}
const stud1 = new Student("Petro", "Petrenko", 2015);
stud1.showFullName("Petrovych");
console.log("Current course: " + stud1.showCourse());

//Завдання 4
class Worker{
    #_experience=1.2;
    constructor(fullName,dayRate,workingDays) {
        this.fullName=fullName;
        this.dayRate=dayRate;
        this.workingDay=workingDays;

    }
    showSalary(){
 return (this.dayRate*this.workingDay);
}
showSalaryWithExperience(){
        return (this.showSalary()*this.#_experience);
}
set experience(exp){
        this.#_experience=exp;
}
get experience(){
        return this.#_experience;
}

}
function sortAndShowWorkers(workers){
workers.sort((a,b)=>a.experience-b.experience);
for(let worker of workers){
    console.log(worker.fullName+" salary: "+worker.showSalaryWithExperience());
}
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);
sortAndShowWorkers([worker1,worker2,worker3]);

//Завдання 5
class GeometricFigure{
    getArea(){
        return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure{
constructor(a,b) {
    super();
    this.a=a;
    this.b=b;
}
getArea() {
    return (this.a*this.b)/2;
}
}
class Square extends GeometricFigure{
constructor(a) {
    super();
    this.a=a;
}
getArea() {
    return this.a**2;
}
}

class Circle extends GeometricFigure{
constructor(r) {
    super();
    this.r = r;
}
getArea() {
    return Math.PI*this.r**2;
}
}
function handleFigures(figures){
    let totalArea=0;
    for(let i=0;i<figures.length;i++){
        console.log("Geometric figure: "+figures[i].toString()+ " - area: "+figures[i].getArea())
        totalArea+=figures[i].getArea();
    }
    console.log(totalArea);
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures(figures);
