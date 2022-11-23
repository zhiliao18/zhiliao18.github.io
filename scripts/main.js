/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';*/

let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/desktop.jpg') {
		myImage.setAttribute('src','images/desktop2.jpg');
	}else{
		myImage.setAttribute('src','images/desktop.jpg');
	}
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	let myName = prompt('干点啥:');
	localStorage.setItem('name', myName);
	myHeading.textContent = myName + '牛逼啊，铁汁！';
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
	setUserName();
}
