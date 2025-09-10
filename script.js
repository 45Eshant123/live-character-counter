const textarea = document.getElementById('textInput');
const count = document.getElementById('count');

textarea.addEventListener('input', () => {
  count.textContent = textarea.value.length;
});