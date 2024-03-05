console.log('MATCHA 🍵 V1')
var matcha = {}
var logs = []
function describe(title, callback) {
    logs[logs.length] = title
    console.log(title)

    callback()
}

function it(title, callback) {
    var log = '*' + title

    logs[logs.length] = log
    console.log(log)

    callback()
}

function expect(value) {
    return {
        toBe: function (expected) {
            var matches = value === expected

            if (!matches) {
                var log = '❌' + value + 'to be' + expected
                logs[logs.length] = log
                console.error(log)

                return false
            }
            var log = '✅' + value + 'to be' + expected

            logs[logs.length] = log
            console.info(log)

            return true
        },

        toBeInstanceOf: function (expected) {
            var matches = value instanceof expected

            if (!matches) {
                var log = '❌' + value + 'to be instance of' + expected.name

                log[logs.length] = log
                console.error(log)

                return false
            }
            var log = '✅' + value + 'to be instance of' + expected.name

            logs[logs.length] = log
            console.info(log)

            return true
        }
    }
}

matcha.logs = logs
matcha.describe = describe
matcha.it = it
matcha.expect = expect

module.exports = matcha




//MATCHA.IT:  it's a functio to define individual test cases within testSuite. Each test has a particular scenario/behaviour

//MATCHA.EXPECT: this is a function within the test cases to make assertions about the behaviour. it verifies wether the outcome meets the expeced outcome. 

//MATCHA.DESCRIBE: it's a funciton to organize the tests into hierarchical group. Collect testSuites. This makes easier to manage and understand larger testSuites. 

// DIFFERENCE BETWEEN : var arroz= new Arroz

//new Arroz= creates a new instance of "Arroz" object. Copying and calling the variable.

//arroz: it's the variable name, it's not a property.
