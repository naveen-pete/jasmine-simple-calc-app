function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function(number) {
    this.total += number;
    return this.total;
}

Calculator.prototype.subtract = function(number) {
    this.total -= number;
    return this.total;
}

Calculator.prototype.multiply = function(number) {
    // console.log('Calculator.multiply() -> number:', number);
    this.total *= number;
    return this.total;
}

Calculator.prototype.divide = function(number) {
    if(number === 0) {
        throw new Error('Cannot divide by zero');
    }
    
    this.total /= number;
    return this.total;
}

Object.defineProperty(Calculator.prototype, 'version', {
    get: function() {
        return fetch('https://gist.githubusercontent.com/naveen-pete/0942964524a34b4ad944ca5f270ee5be/raw/19b38d52aeeea5c485716ff38564ac64400e5c9b/simple-calc-ver.json')
            .then(response => response.json())
            .then(app => app.version);
    },
    configurable: true,
    enumerable: true
});
