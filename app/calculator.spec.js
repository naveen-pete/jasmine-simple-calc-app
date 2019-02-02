// describe() params
// 1. description / title of the test suite
// 2. anonymous function that gets executed
describe('Calculator', function() {

    // it() params
    // 1. description of the test
    // 2. anonymous function that contains the test
    it('should add number to total', function() {
        const calc = new Calculator();
        calc.add(5);
        expect(calc.total).toBe(5);
    });

    it('should subtract number from total', function() {
        const calc = new Calculator();
        calc.total = 30;
        calc.subtract(5);
        expect(calc.total).toBe(25);
    });

    it('should multiply total by number', function() {
        const calc = new Calculator();
        calc.total = 100;
        calc.multiply(2);
        expect(calc.total).toBe(200);
    });

    it('should divide total by number', function() {
        const calc = new Calculator();
        calc.total = 200;
        calc.divide(2);
        expect(calc.total).toBe(100);
    });

});