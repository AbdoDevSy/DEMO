document.getElementById('calc-btn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('first-input').value);
    let num2 = parseFloat(document.getElementById('second-input').value);
    try {
    let result = divideNumbers(num1, num2);
    document.getElementById('result').innerHTML = result;
    } catch (error) {
        document.getElementById('result').innerHTML = "Error: " + error.message;
    }
    
});