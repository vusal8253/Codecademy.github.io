let btn = document.getElementById('btn');
let h1 = document.getElementById('h1');
let btn1 = document.getElementById('btn1');
function close(){
    h1.style.display = 'none';
}

btn.addEventListener('click', close);
function open() {
    h1.style.display = 'block';
}
btn1.addEventListener('click', open);
