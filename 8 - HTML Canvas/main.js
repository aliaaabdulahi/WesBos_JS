const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADASS';
context.lineJoin = 'round';
context.lineCap = 'round';
