const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
	localStorage.setItem('text', editor.value);
})


window.addEventListener('load', () => {
	editor.value = localStorage.getItem('text');
})