function appendToDisplay(value) {
    const display = document.getElementById('display');
    const lastChar = display.innerText.charAt(display.innerText.length - 1);
    
    
    if (/[0-9\.\)]/.test(lastChar) && value === '(') {
        display.innerText += '*(';
    } 
    else if (lastChar === ')' && /[0-9\.\(]/.test(value)) {
        display.innerText += ')*' + value;
    } 
    else {
        display.innerText += value;
    }
}

function clearAll() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById('display').innerText.trim();
    
    expression = expression.replace(/x/g, '*');
    
    try {
        let result = eval(expression);
        if (expression === '') {
            result = '0'; 
        }
        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = /[0-9\.\+\-\*\/=\(\)]/; 
    if (allowedKeys.test(key)) {
        if (key === '=' ) {
            calculate(); 
        } else {
            appendToDisplay(key); 
        }
    }
    if (event.key === 'Enter' || event.key === 'Escape') {
        event.preventDefault();
    }
});
