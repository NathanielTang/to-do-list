import './style.css';


const test = document.createElement('p');
test.textContent = "hello, world"
test.classList.add('test')
document.body.appendChild(test)