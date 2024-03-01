function assertHasValues(iterable) {
    var count = arguments.length - 1

    for (n = 0; n < count; n++) {
        var current = iterable[n]
        var target = arguments[n + 1]

        console.assert(current === target, 'for index' + n + ', ' + current + 'equals' + target)
    }
    console.assert(iterable.length === count, 'lenght' + iterable.length + 'equals' + count)
}

function assertEqualsValue(value, target) {
    console.assert(value === target, target)
}


try {
    forEach(nums)
} catch (error) {
    assert.error(error, 'TypeError', 'undefined is not a function')
}

function assertValuesPropertiesMatch(iterable, compare, callback) {
    for (var i = 0; i < compare.length; i++) {
        var current = iterable[i]
        var target = compare[i]

        var matches = callback(current, target)

        console.assert(matches, 'for index' + i + ' ' + callback)
    }
}


module.exports = {
    assertHasValues: assertHasValues,
    assertEqualsValue: assertEqualsValue,
    assertError: assertError,
}