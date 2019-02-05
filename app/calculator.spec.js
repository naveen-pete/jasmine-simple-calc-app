// describe() params
// 1. description / title of the test suite
// 2. anonymous function that gets executed
describe('calculator.js', function() {

    describe('Calculator', function() {
        let calc, calc2, i = 0;

        beforeEach(function() {
            calc = new Calculator();
            calc2 = new Calculator();
            // console.log('beforeEach() invoked.', ++i);
        });

        afterEach(function() {
            // clean up code goes here
        });

        // 1
        it('should initialize the total', function() {
            expect(calc.total).toBe(0);
            expect(calc.total).toBeFalsy();
        });
    
        // 2
        it('should check if two objects are equal', function() {
            expect(calc).toEqual(calc2);
        });
    
        // 3
        it('should be instantiated', function() {
            expect(calc).toBeTruthy();
            expect(calc2).toBeTruthy();
            expect(calc.constructor.name).toContain('Calc');
        });
    
        // 4
        it('should create an unique object', function() {
            expect(calc).not.toBe(calc2);
        });
    
        // 5
        it('should have common operations', function() {
            expect(calc.add).toBeDefined();
            expect(calc.subtract).toBeDefined();
            expect(calc.multiply).toBeDefined();
            expect(calc.divide).toBeDefined();
    
            expect(calc.sum).toBeUndefined();
        });
    
        // 6
        it('can overwrite total', function() {
            calc.total = null;
    
            expect(calc.total).toBeNull();        
        });
    
        // 7
        it('should return total using toMatch', function() {
            calc.total = 50;
    
            // check if the total is any pattern containing only digits
            // with an optional prefix of minus (-)
            expect(calc.total).toMatch(/-?\d+/);
    
            // check if the type of total is a number
            expect(typeof calc.total).toMatch('number');
        });
    
        // 8
        it('checks using jasmine.anything() and jasmine.any()', function() {
            calc.total = 10;
    
            expect(calc.total).toEqual(jasmine.anything());
            expect(calc.total).toEqual(jasmine.any(Number));
            expect(calc.add).toEqual(jasmine.anything());
            expect(calc.add).toEqual(jasmine.any(Function));
        });
    
        // 9
        it('checks using a custom matcher', function() {
            jasmine.addMatchers(customMatchers);
    
            expect(calc).toBeCalculator();
            expect({}).not.toBeCalculator();
        });
    
        // 10
        it('checks using a third party matcher', function() {
            expect(calc.total).toBeNumber();
        });

        describe('add()', function() {
            // 11
            // it() params
            // 1. description of the test / spec
            // 2. anonymous function that contains the test
            it('should add number to total', function() {
                calc.add(5);

                expect(calc.total).toBe(5);
            });

            // 12
            it('should return total', function() {
                calc.total = 50;
        
                expect(calc.add(20)).toBe(70);
            });
        
        });

        describe('subtract()', function() {
            // 13
            it('should subtract number from total', function() {
                calc.total = 30;
                calc.subtract(5);
        
                expect(calc.total).toBe(25);
            });
        });
    
        describe('multiply()', function() {
            // 14
            it('should multiply total by number', function() {
                calc.total = 100;
                calc.multiply(2);
        
                expect(calc.total).toBe(200);
            });

            // 15
            it('does not handle NaN', function() {
                calc.total = 20;
                calc.multiply('a');
        
                expect(calc.total).toBeNaN();
            });
        
        });
    
        describe('divide()', function() {
            // 16
            it('should divide total by number', function() {
                calc.total = 200;
                calc.divide(2);
        
                expect(calc.total).toBe(100);
            });

            // 17
            it('handles divide by zero', function() {
                const error = new Error('Cannot divide by zero');
        
                expect(() => { calc.divide(0); }).toThrow();
                expect(() => { calc.divide(0); }).toThrow(error);
                expect(() => { calc.divide(0); }).toThrowError(Error);
                expect(() => { calc.divide(0); }).toThrowError(Error, 'Cannot divide by zero');
        
                expect(() => { throw 'some error'; }).toThrow('some error');
            });
        
        });

        describe('get version', function() {
            // 18
            it('should fetch version from external source (Promise)', function(done) {
                spyOn(window, 'fetch').and.returnValue(
                    Promise.resolve(new Response('{ "version": "0.1" }'))
                );

                calc.version.then(function(version) {
                    expect(version).toBe('0.1');
                    done();
                });
            });

            // 19
            it('should fetch version from external source (async/await)', async function() {
                spyOn(window, 'fetch').and.returnValue(
                    Promise.resolve(new Response('{ "version": "0.1" }'))
                );

                const version = await calc.version
                expect(version).toBe('0.1');
            });
        });
    
    });

});
