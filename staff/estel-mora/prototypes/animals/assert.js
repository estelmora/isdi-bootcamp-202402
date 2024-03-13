function equalValue(value, expected) {
    console.assert(value === expected, value + ' equals ' + expected)
}

function instanceOf(value, type) {
    console.assert(value instanceof type === true, true)
}

function error(error, type, message) {
    console.assert(error.name === type, 'name')
    console.assert(error.message === message, 'message')
}

module.exports = {
    equalValue: equalValue,
    instanceOf: instanceOf,
    error: error
}