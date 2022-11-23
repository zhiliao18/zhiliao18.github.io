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
	let myName = prompt('今天干了点啥:');
	if(myName !== null){
		localStorage.setItem('name', myName);
		myHeading.textContent = myName + '，就这？ \\n 你得支棱起来啊！';
	}else{
		myName = ' ';
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = '来了，老弟！';/* + storedName;*/
}

myButton.onclick = function () {
	setUserName();
}
