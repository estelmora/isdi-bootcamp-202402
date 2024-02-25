delete Array.prototype.reduce
/*combines all elements of an array into a single value by repeatedly applying a function and accumulating the result
*/
function reduce(arrat, callback, accum) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        accum = callback(accum, elem)
    }
    return accum
}


console.log('CASE 1')

var cart = [
    { what: 'socks', price: 14.95, qty: 2, brand: 'adidas' },
    { what: 't-shirt', price: 24.85, qty: 3, brand: 'levis' },
    { what: 'shorts', price: 20.15, qty: 4, brand: 'hilfiger' },
    { what: 'bag', price: 200.05, qty: 1, brand: 'dolce gabana' },
]


var total = cart.reduce(function (amount, item) {
    return amount + item['price'] * item[qty] // esto calcula el accum total= 385.5
}, 0) //acumulador al inicio es 0


console.log('CASE 2')
var cart = [
    { what: 'socks', price: 14.95, qty: 2, brand: 'adidas' },
    { what: 't-shirt', price: 24.85, qty: 3, brand: 'levis' },
    { what: 'shorts', price: 20.15, qty: 4, brand: 'hilfiger' },
    { what: 'bag', price: 200.05, qty: 1, brand: 'dolce gabana' },
]

var itemsQty = reduce(cart, function (totalQty, item) {
    return totalQty + item.qty;
}, 0)

var average = reduce(cart, function (amount, item, index, cart) {
    return amount + item.price * item.qty / itemsQty
}, 0)

console.log(average);