describe('app.js', function() {
    describe('calculate()', function() {
        it('validates expression when first number is invalid', function() {
            spyOn(window, 'updateResult').and.stub();

            calculate('a+3');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validates expression when second number is invalid', function() {
            spyOn(window, 'updateResult'); // and.stub() is the default, can be omitted

            calculate('3+a');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validates expression when the operator is invalid', function() {
            const spy = spyOn(window, 'updateResult'); // and.stub() is the default, can be omitted

            calculate('1%3');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith('Expression not recognized');
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('calls add', function() {
            const spy = spyOn(Calculator.prototype, 'add');

            calculate('1+5');

            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(5);
            expect(spy).toHaveBeenCalledWith(1);
        });

        it('calls subtract', function() {
            const spyAdd = spyOn(Calculator.prototype, 'add');
            const spySub = spyOn(Calculator.prototype, 'subtract');

            calculate('2-3');

            expect(spyAdd).toHaveBeenCalled();
            expect(spySub).toHaveBeenCalled();
            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spySub).toHaveBeenCalledTimes(1);
            expect(spyAdd).toHaveBeenCalledWith(2);
            expect(spySub).toHaveBeenCalledWith(3);
        });
        
        it('calls multiply', function() {
            const spyAdd = spyOn(Calculator.prototype, 'add');
            const spyMul = spyOn(Calculator.prototype, 'multiply');

            calculate('2 * 3');

            expect(spyAdd).toHaveBeenCalled();
            expect(spyMul).toHaveBeenCalled();
            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spyMul).toHaveBeenCalledTimes(1);
            expect(spyAdd).toHaveBeenCalledWith(2);
            expect(spyMul).toHaveBeenCalledWith(3);
        });

        it('calls divide', function() {
            const spyAdd = spyOn(Calculator.prototype, 'add');
            const spyDiv = spyOn(Calculator.prototype, 'divide');

            calculate('10 / 2');

            expect(spyAdd).toHaveBeenCalled();
            expect(spyDiv).toHaveBeenCalled();
            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spyDiv).toHaveBeenCalledTimes(1);
            expect(spyAdd).toHaveBeenCalledWith(10);
            expect(spyDiv).toHaveBeenCalledWith(2);
        });

        it('calls updateResult (using callThrough())', function() {
            const spy = spyOn(window, 'updateResult');

            spyOn(Calculator.prototype, 'multiply').and.callThrough();

            calculate('5*5');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(25);
        });

        it('calls updateResult (using callFake())', function() {
            const spy = spyOn(window, 'updateResult');

            spyOn(Calculator.prototype, 'multiply').and.callFake((n) => {
                // console.log('Fake multiply() -> n:', n);
                return 100; 
            });

            calculate('5*5');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(100);
        });

        it('calls updateResult (using returnValue())', function() {
            const spy = spyOn(window, 'updateResult');

            spyOn(Calculator.prototype, 'multiply').and.returnValue(200);

            calculate('5*5');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(200);
        });

        it('calls updateResult (using returnValues())', function() {
            const spy = spyOn(window, 'updateResult');

            spyOn(Calculator.prototype, 'add').and.returnValues(null, 10);

            calculate('5+5');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(10);
        });

        it('does not handle errors', function() {
            spyOn(Calculator.prototype, 'multiply').and.throwError('some error');

            expect(function() { calculate('5*5'); }).toThrowError('some error');
        });
    });

    describe('updateResult()', function() {
        let element;

        beforeAll(function() {
            // executed once before all specs are executed
            element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);    
        });

        afterAll(function() {
            // executed once after all specs are executed
            document.body.removeChild(element);
        });

        it('adds result to DOM element', function() {
            updateResult(5);

            expect(element.innerText).toBe('5');
        });
    });

    describe('showVersion()', function() {
        it('calls calculator.version', function() {
            spyOn(document, 'getElementById').and.returnValue({
                innerText: null
            });

            const spy = spyOnProperty(Calculator.prototype, 'version', 'get')
                .and.returnValue(Promise.resolve('0.1'));

            showVersion();

            expect(spy).toHaveBeenCalled();
        });

    });
});