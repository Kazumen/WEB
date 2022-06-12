//Task 1
function createWindow() {
    let newWindow = window.open("", "", "width=300, height=300");
    setTimeout(function () {
        newWindow.resizeTo(500, 500);
    }, 2000);
    setTimeout(function () {
        newWindow.moveTo(200, 200);
    }, 4000);
    setTimeout(function () {
        newWindow.close();
    }, 6000);
}

//Task 2
function changeCSS(){
    document.getElementById('text').style.color = "orange";
    document.getElementById('text').style.fontSize = "20px";
    document.getElementById('text').style.fontFamily = "Comic Sans MS";
}

//Task 3
function changeColor(color){
    document.body.style.backgroundColor = color;
}

//Task 4
function deleti(){
    let list = document.getElementById('select');
    list.removeChild(list.options[list.selectedIndex]);
}

//Task 5
function buttonClick(){
    document.getElementById("liveButton").innerHTML += "<\p>На мене натиснули<\/p>";
}

function buttonOver(){
    document.getElementById("liveButton").innerHTML += "<\p>Миша на мені<\/p>";
}

function buttonMouseOut(){
    document.getElementById("liveButton").innerHTML += "<\p>Миша не на мені<\/p>";
}

//Task 6
window.addEventListener("resize",windowResize);
windowResize();
function windowResize() {
    document.getElementById("height").innerHTML = "Висота: " + window.innerHeight + "px";
    document.getElementById("width").innerHTML = "Ширина: " + window.innerWidth + "px, ";
}

//Task 7
function addCities(){
    let country = document.getElementById("country").value;
    switch (country){
        case "Germany":
            document.getElementById("cities").innerHTML = "<option>Hanover<\/option><option>Ostbevern<\/option><option>Berlin<\/option>";
            break;
        case "USA":
            document.getElementById("cities").innerHTML = "<option>New York<\/option><option>California<\/option><option>Washington<\/option>";
            break;
        case "Ukraine":
            document.getElementById("cities").innerHTML = "<option>Kyiv<\/option><option>Ternopil<\/option><option>Lviv<\/option>";
            break;
    }
    cityCountry();
}

function cityCountry(){
    let country = document.getElementById("country").value;
    let city = document.getElementById("cities").value;
    document.getElementById("countryCity").innerHTML = country + ", " + city;
}