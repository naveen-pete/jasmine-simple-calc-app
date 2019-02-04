// describe() params
// 1. description / title of the test suite
// 2. anonymous function that gets executed
describe('Calculator', function() {

    // it() params
    // 1. description of the test / spec
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

    it('should initialize the total', function() {
        const calc = new Calculator();

        expect(calc.total).toBe(0);
        expect(calc.total).toBeFalsy();
    });

    it('should check if two objects are equal', function() {
        const calc1 = new Calculator();
        const calc2 = new Calculator();

        expect(calc1).toEqual(calc2);
    });

    it('should be instantiated', function() {
        const calc1 = new Calculator();
        const calc2 = new Calculator();

        expect(calc1).toBeTruthy();
        expect(calc2).toBeTruthy();
        expect(calc1.constructor.name).toContain('Calc');
    });

    it('should create an unique object', function() {
        const calc1 = new Calculator();
        const calc2 = new Calculator();

        expect(calc1).not.toBe(calc2);
    });

    it('should have common operations', function() {
        let calc = new Calculator();

        expect(calc.add).toBeDefined();
        expect(calc.subtract).toBeDefined();
        expect(calc.multiply).toBeDefined();
        expect(calc.divide).toBeDefined();

        expect(calc.sum).toBeUndefined();
    });

    it('can overwrite total', function() {
        const calc = new Calculator();
        calc.total = null;

        expect(calc.total).toBeNull();        
    });

    it('does not handle NaN', function() {
        const calc = new Calculator();
        calc.total = 20;
        calc.multiply('a');

        expect(calc.total).toBeNaN();
    });

    it('handles divide by zero', function() {
        const calc = new Calculator();
        const error = new Error('Cannot divide by zero');

        expect(() => { calc.divide(0); }).toThrow();
        expect(() => { calc.divide(0); }).toThrow(error);
        expect(() => { calc.divide(0); }).toThrowError(Error);
        expect(() => { calc.divide(0); }).toThrowError(Error, 'Cannot divide by zero');

        expect(() => { throw 'some error'; }).toThrow('some error');
    });

    it('should return total', function() {
        const calc = new Calculator();
        calc.total = 50;

        expect(calc.add(20)).toBe(70);
    });

    it('should return total using toMatch', function() {
        const calc = new Calculator();
        calc.total = 50;

        // check if the total is any pattern containing only digits
        // with an optional prefix of minus (-)
        expect(calc.total).toMatch(/-?\d+/);

        // check if the type of total is a number
        expect(typeof calc.total).toMatch('number');
    });

    it('checks using jasmine.anything() and jasmine.any()', function() {
        const calc = new Calculator();
        calc.total = 10;

        expect(calc.total).toEqual(jasmine.anything());
        expect(calc.total).toEqual(jasmine.any(Number));
        expect(calc.add).toEqual(jasmine.anything());
        expect(calc.add).toEqual(jasmine.any(Function));
    });

    it('checks using a custom matcher', function() {
        jasmine.addMatchers(customMatchers);
        const calc = new Calculator();

        expect(calc).toBeCalculator();
        expect({}).not.toBeCalculator();
    });

    it('checks using a third party matcher', function() {
        const calc = new Calculator();

        expect(calc.total).toBeNumber();
    });
});
