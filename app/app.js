function calculate(inputValue) {
    const expression = /\+|\-|\*|\//;
    const numbers = inputValue.split(expression);
    
    const numberA = parseInt(numbers[0]);
    const numberB = parseInt(numbers[1]);
    const operators = inputValue.match(expression);

    if(operators === null) {
        updateResult('Invalid operation');
        return;
    }

    const calc = new Calculator();
    calc.add(numberA);

    let result = 0;
    switch(operators[0]) {
        case '+':
            result = calc.add(numberB);
            break;

        case '-':
            result = calc.subtract(numberB);
            break;

        case '*':
            result = calc.multiply(numberB);
            break;

        case '/':
            result = calc.divide(numberB);
            break;
    }

    updateResult(result);
}

function updateResult(result) {
    const element = document.getElementById('result');

    if(element) {
        element.innerText = result;
    }
}
