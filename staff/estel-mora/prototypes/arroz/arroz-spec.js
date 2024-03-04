var matcha = require('./matcha')

var Arroz = require('./arroz')


matcha.describe('Arroz', function () {
    matcha.describe('> constructor', function () {
        matcha.it('should construct', function () {
            var a = new Arroz

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(0)
        })

        matcha.it('should construct with multiple values', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(3)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })

        matcha.it('should construct with one non-numeric value', function () {
            var a = new Arroz(true)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(1)
            matcha.expect(a[0]).toBe(true)
        })

        matcha.it('should construct with one numeric value', function () {
            var a = new Arroz(5)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(5)
            for (var i = 0; i < a.length; i++)
                matcha.expect(a[i]).toBe(undefined)
        })
    })

    // PUSH
    matcha.describe('> push', function () {
        matcha.it('should push a value', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.push).toBe(true)

            var length = a.push(40)

            matcha.expect(a.length).toBe(4)
            matcha.expect(a[a.length - 1]).toBe(40)
            matcha.expect(length).toBe(4)
        })

        matcha.it('should push many values', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.push).toBe(true)

            var length = a.push(40, 50, 60, 70)

            matcha.expect(a.length).toBe(7)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(50)
            matcha.expect(a[5]).toBe(60)
            matcha.expect(a[6]).toBe(70)
            matcha.expect(length).toBe(7)
        })
    })

    matcha.describe('> pop', function () {
        matcha.it('should extract last value', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.pop).toBe(true)

            var value = a.pop()

            matcha.expect(a.length).toBe(2)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(undefined)
            matcha.expect(value).toBe(30)
        })
    })
    // TO STRING
    matcha.describe('> toString', function () {
        matcha.it('should convert to string', function () {
            var a = new Arroz(10, 20, 30, 40, 50)

            matcha.expect(!!a.toString).toBe(true)

            var string = a.toString()

            matcha.expect(string).toBe('Arroz [10, 20, 30, 40, 50]')
        })
    })
})


//SLICE 
matcha.describe('Arroz', function () {
    matcha.describe('> slice', function () {
        matcha.it('should slice elements from start to end', function () {
            var a = new Arroz('a', 'b', 'c', 'd', 'e')
            var sliced = a.slice(1, 4);

            matcha.expect(sliced).toBeInstanceOf(Arroz)
            matcha.expect(sliced.length).toBe(3)
            matcha.expect(sliced[0]).toBe('b')
            matcha.expect(sliced[1]).toBe('c')
            matcha.expect(sliced[2]).toBe('d')
        })
    })
})

// AT
var matcha = require('./matcha');
var Arroz = require('./arroz');

matcha.describe('Arroz', function () {
    matcha.describe('> at', function () {
        matcha.it('should return the element at the specified index', function () {
            var a = new Arroz(10, 20, 30, 40, 50);

            matcha.expect(a.at(0)).toBe(10);
            matcha.expect(a.at(2)).toBe(30);
            matcha.expect(a.at(4)).toBe(50);
        });

        matcha.it('should handle negative indices', function () {
            var a = new Arroz(10, 20, 30, 40, 50);

            matcha.expect(a.at(-1)).toBe(50);
            matcha.expect(a.at(-3)).toBe(30);
        });

        matcha.it('should return undefined for out-of-range indices', function () {
            var a = new Arroz(10, 20, 30, 40, 50);

            matcha.expect(a.at(5)).toBe(undefined);
            matcha.expect(a.at(-6)).toBe(undefined);
        });
    });
});

// EVERY
matcha.it('should return false if at least one element does not satisfy the condition', function () {
    var a = new Arroz(1, 2, 3, 4, 5);

    matcha.expect(a.every(function (element) {
        return element < 3;
    })).toBe(false);
});

matcha.it('should return true for an empty Arroz', function () {
    var a = new Arroz();

    matcha.expect(a.every(function (element) {
        return element > 0;
    })).toBe(true);
});

//INCLUDES
var matcha = require('./matcha');
var Arroz = require('./arroz');

matcha.describe('Arroz', function () {
    matcha.describe('>includes', function () {
        matcha.it('should return true if the value is found in the Arroz', function () {
            var a = new Arroz(1, 2, 3, 4, 5);
            matcha.expect(a.includes(3)).toBe(true);
        });

        matcha.it('should return false if the value is not found in the Arroz', function () {
            var a = new Arroz(1, 2, 3, 4, 5);
            matcha.expect(a.includes(6)).toBe(false);
        });
    });
});

// SOME
matcha.describe('Arroz', function () {
    matcha.describe('> some', function () {
        matcha.it('should return true if at least one element satisfies the condition', function () {
            var a = new Arroz(1, 2, 3, 4, 5);
            matcha.expect(a.some(function (element) {
                return element > 3;
            })).toBe(true);
        });

        matcha.it('should return false if none of the elements satisfy the condition', function () {
            var a = new Arroz(1, 2, 3, 4, 5);
            matcha.expect(a.some(function (element) {
                return element > 5;
            })).toBe(false);
        });
    });
});

//SHIFT
matcha.describe('Arroz', function () {
    matcha.describe('>shift', function () {
        matcha.it('should remove the first element and return it', function () {
            var a = new Arroz(10, 20, 30, 40, 50);

            matcha.expect(a.shift()).toBe(10);
            matcha.expect(a.length).toBe(4);
            matcha.expect(a[0]).toBe(20);
            matcha.expect(a[1]).toBe(30);
            matcha.expect(a[2]).toBe(40);
            matcha.expect(a[3]).toBe(50);
        });
    });
});
//UNSHIFT
matcha.describe('Arroz', function () {
    matcha.describe('>unshift', function () {
        matcha.it('should add elements to the beginning of the Arroz', function () {
            var a = new Arroz(30, 40, 50);
            a.unshift(10, 20);
            matcha.expect(a[0]).toBe(10);
            matcha.expect(a[1]).toBe(20);
            matcha.expect(a[2]).toBe(30);
            matcha.expect(a[3]).toBe(40);
            matcha.expect(a[4]).toBe(50);
        });
    });
});

//FIND INDEX
matcha.describe('Arroz', function () {
    matcha.describe('findIndex', function () {
        matcha.it('should return the index of the first element that satisfies the condition', function () {
            var a = new Arroz(1, 2, 3, 4, 5);

            var index = a.findIndex(function (element) {
                return element > 3;
            });

            matcha.expect(index).toBe(3);
        });

        matcha.it('should return -1 if no element satisfies the condition', function () {
            var a = new Arroz(1, 2, 3, 4, 5);

            var index = a.findIndex(function (element) {
                return element > 5;
            });

            matcha.expect(index).toBe(-1);
        });
    });
});


// FROM
matcha.describe('Arroz', function () {
    // Describe the from method
    matcha.describe('> from', function () {
        // Test the from method
        matcha.it('should create a new Arroz instance from an iterable or array-like object', function () {
            // Test Case 1: Create a new Arroz instance from a string
            var arr1 = Arroz.prototype.from('foo');
            matcha.expect(arr1 instanceof Arroz).toBe(true);
            matcha.expect(arr1.length).toBe(3);
            matcha.expect(arr1[0]).toBe('f');
            matcha.expect(arr1[2]).toBe('o');

            // Test Case 2: Create a new Arroz instance from an array with a formula function
            var arr2 = Arroz.prototype.from([1, 2, 3], function (x) { return x + x; });
            matcha.expect(arr2 instanceof Arroz).toBe(true);
            matcha.expect(arr2.length).toBe(3);
            matcha.expect(arr2[0]).toBe(2);
            matcha.expect(arr2[2]).toBe(6);
        });
    });
});

// FOR EACH (recibes 3 param)
matcha.describe('>forEach', function () {
    matcha.it('should iterate on each element', function () {
        var a = new Arroz(10, 20, 30, 40, 50, 60);
        var b = new Arroz();

        a.forEach(function (element, index, arroz) {
            b[index] = { item: element, iterable: arroz }; // Changed 'element' to 'item'
            b.length++;
        });

        matcha.expect(a.length).toBe(6);

        for (var i = 0; i < a.length; i++)
            matcha.expect(b[i].item).toBe(10 * (i + 1));

        matcha.expect(b.length).toBe(a.length);

        for (var i = 0; i < b.length; i++) {
            var element = b[i];

            matcha.expect(element.item).toBe(10 * (i + 1));
            matcha.expect(element.iterable).toBe(a);
        }
    });
});

//FIND
matcha.describe('>find', function () {
    var a = new Arroz({ brand: 'adidas', model: 'cool socks', price: 16 }, { brand: 'nike', model: 'air max', price: 120 }, { brand: 'puma', model: 'dangerous glasses', price: 30 });

    var i = 0;

    var item = a.find(function (element, index, arroz) {
        matcha.expect(index).toBe(i++);
        matcha.expect(arroz).toBe(a);

        return element.price === 120;
    });

    matcha.expect(item.brand).toBe('nike');
    matcha.expect(item.model).toBe('air max');
    matcha.expect(item.price).toBe(120);
});

// FROM
matcha.describe('> from', function () {
    matcha.it('should create a new instance of Arroz from numbers', function () {
        var nums = new Arroz(10, 20, 30);
        var nums2 = Arroz.from(nums); // Call Arroz.from directly

        matcha.expect(nums.length).toBe(3);

        for (var i = 0; i < nums.length; i++) {
            matcha.expect(nums[i].toBe(10 * (i + 1)));
        }
        matcha.expect(nums === nums2).toBe(false);
        matcha.expect(nums2.length).toBe(nums.length);

        for (var i = 0; i < nums2.length; i++) {
            matcha.expect(nums2[i]).toBe(10 * (i + 1));
        }
    });
});