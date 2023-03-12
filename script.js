//your code here
const inputElement=document.querySelector('#sentence');
const count=document.querySelector('#countDiv');

function handleInput(e){
	const sentence=e.target.value;
	const countWord=sentence.split(" ").length;
	count.innerText=countWord-1;
}
inputElement.addEventListener('input',handleInput);
