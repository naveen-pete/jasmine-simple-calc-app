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