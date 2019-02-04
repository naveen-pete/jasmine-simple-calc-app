const customMatchers = {
    toBeCalculator: toBeCalculator
}

function toBeCalculator() {
    return {
        compare: function(actual) {
            const result = {
                pass: actual instanceof Calculator,
                message: ''
            };

            if(result.pass) {
                result.message = 'Expected ' + JSON.stringify(actual) + ' not to be instance of Calculator';
            } else {
                result.message = 'Expected ' + JSON.stringify(actual) + ' to be instance of Calculator';
            }

            return result;
        }
    }
}