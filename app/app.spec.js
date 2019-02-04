describe('app.js', function() {
    describe('calculate()', function() {
        xit('validates expression', function() {});
        xit('calls add', function() {});
        xit('calls subtract', function() {});
        xit('calls multiply', function() {});
        xit('calls divide', function() {});
        xit('validates operation', function() {});
        xit('calls updateResult', function() {});
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
});