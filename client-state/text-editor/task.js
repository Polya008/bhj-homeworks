const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
	localStorage.setItem('text', editor.value);
})


window.addEventListener('load', () => {
	let newText = localStorage.getItem('text');
   	editor.value = newText;
})