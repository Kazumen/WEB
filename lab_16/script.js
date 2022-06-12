//Завдання 1
function setContent() {
    document.getElementById("test").innerHTML = "Last";
}

function setContent2() {
    document.querySelector("#test").innerHTML = "Last";
}

//Завдання 2
function changeCatAndDog() {
    if(document.getElementById("animal").getAttribute('alt') == "Dog"){
        document.getElementById("animal").setAttribute("src", "img/cat.png");
        document.getElementById("animal").setAttribute("alt", "Cat");
    } else {
        document.getElementById("animal").setAttribute("src", "img/dog.jpg");
        document.getElementById("animal").setAttribute("alt", "Dog");
    }
}

function showCatAndDogImageModal() {
    let modalImage = document.getElementsByClassName('modalImage')[0];
    let image = document.getElementsByClassName('image')[0];

    modalImage.setAttribute('src', image.getAttribute('src'));
    modalImage.setAttribute('alt', image.getAttribute('alt'));

    let modal = document.getElementById('modalWindow');
    modal.style.display = 'block';
}

function closeCatAndDogImageModal() {
    let modal = document.getElementById('modalWindow');
    modal.style.display = 'none';
}

//Завдання 3
function printText() {
    let text = document.querySelectorAll('#text > p');
    for (let i = 0; i < text.length; i++) {
        console.log("Selector text " + i + ": " + text[i].innerHTML);
    }
}

//Завдання 4
function displayModalWithOrderedList() {
    let listItems = document.getElementsByTagName('li');
    let modal = document.getElementById('modalWindow2');

    printListItems(listItems);
    modal.style.display = 'block';
}

function displayModalWithOrderedList2() {
    let listItems = document.querySelectorAll("ul > li");
    let modal = document.getElementById('modalWindow2');

    printListItems(listItems);
    modal.style.display = 'block';
}

function printListItems(listItems) {
    let listContents = [listItems.item(0), listItems.item(4), listItems.item(1), listItems.item(3), listItems.item(2)];
    document.getElementById('orderedList').innerHTML = listContents[0].innerHTML + ', ' + listContents[1].innerHTML + ', ' + listContents[2].innerHTML + ', ' + listContents[3].innerHTML + ', ' + listContents[4].innerHTML;
}

function closeOrderedListModal() {
    let modal = document.getElementById('modalWindow2');
    modal.style.display = 'none';
}

//Завдання 5
function Exercise5() {
    let header = document.querySelector('#exercise5 > h1');
    header.style.backgroundColor = 'lightgreen';

    let paragraphs = document.querySelectorAll('#myDiv > p');
    paragraphs[0].style.fontWeight = 'bold';
    paragraphs[1].style.color = 'red';
    paragraphs[2].style.textDecoration = 'underline';
    paragraphs[3].style.fontStyle = 'italic';

    let myList = document.getElementById('myList');
    myList.querySelectorAll('li')
        .forEach(li =>
            li.style.display = 'inline-block'
        );

    let span = document.querySelector('#exercise5 > span');
    span.style.display = 'none';
}

//Завдання 6
function enterMessages(){
    let message1=prompt("Enter your 1st message");
    let message2=prompt("Enter your 2nd message");
    let input1=document.getElementById("input1");
    let input2=document.getElementById("input2");
    input1.value=message1;
    input2.value=message2;

}

function swapMessages(){
    let input1=document.getElementById("input1");
    let input2=document.getElementById("input2");
    let message1=input1.value;
    let message2=input2.value;
    input1.value=message2;
    input2.value=message1;
}

//Завдання 7
function createContent(){
    let div = document.getElementById('exercise7');
    div.innerHTML = '<main class="mainClass check item">\n' +
        '<div id="myDiv">\n' +
        '<p>First paragraph</p>\n' +
        '</div>\n' +
        '</main>\n';
}