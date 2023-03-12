//your code here
const inputElement=document.querySelector('#evaluatedText');
const count=document.querySelector('#wordCount');

function handleInput(e){
	const sentence=e.target.value;
	const countWord=sentence.split(" ").length;
	count.innerText=countWord;
}
inputElement.addEventListener('input',handleInput);
