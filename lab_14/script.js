//Завдання 1
function calcRectangleArea(width,height){
try {
    if (isNaN(width) || isNaN(height)) {
        throw new Error("Введено неправильні значення!");
    }
    return width * height;
}
  catch (Error){
return Error.message;
  }
}
console.log(calcRectangleArea(5,"hal"));

//Завдання 2
function checkAge(){
    let age=prompt("Введіть свій вік:");
    if(age===''){
        throw new Error("Ви не ввели вік!");
    }
    else if(isNaN(age)){
throw new Error("Ви ввели неправильне значення!");
    }
    else if(age<14){
        throw new Error("Ви надто молодий");
    }
    alert("Ви можете переглянути фільм!");
}

try{
    checkAge();
}catch (e){
    alert(e.message);
}

//Завдання 3
function showUser(id){
    if (id<0){
        throw new Error("id від'ємний");
    }
    console.log({id:id});
}
function showUsers(ids){
    let usersIds=[];
    for (const id of ids){
        try{
        showUser(id);
        usersIds.push(id);}
        catch (e){
            console.log(e.message);
        }
    }
    return usersIds;
}
showUsers([5,7,1,-5]);

//Завдання 4
class MonthException {
    constructor(message) {
        this.name="MonthException";
        this.message="message";
    }
}
function showMonthName(month){
    switch (month){
        case 1:
            return 'Січень';
        case 2:
            return 'Лютий';
        case 3:
            return 'Березень';
        case 4:
            return 'Квітень';
        case 5:
            return 'Травень';
        case 6:
            return 'Червень';
        case 7:
            return 'Липень';
        case 8:
            return 'Серпень';
        case 9:
            return 'Вересень';
        case 10:
            return 'Жовтень';
        case 11:
            return 'Листопад';
        case 12:
            return 'Грудень';
        default:
            throw new MonthException('Неправильний номер місяця');
    }
}
try {
    console.log(showMonthName(15));
}catch (e){
    console.log({name:e.name, message:e.message});
}
