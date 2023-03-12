//your code here
const inputElement=document.querySelector('#evaluatedText');
const h3Element=document.querySelector('#wordCount');

function handleInput(e){
	const sentence=e.target.value;
	let match=0;
	if(sentence.trim()===""){
		match=0;
	}else{
		match = sentence.match(/\S+/ig).length;
	}
  h3Element.textContent = match;
}
inputElement.addEventListener('input',handleInput);
