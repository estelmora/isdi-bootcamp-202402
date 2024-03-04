function Arroz() {
    if (arguments.length !== 1) { //! es diferente / no igual  a 1
        this.length = arguments.length //arguemtns, son todos los elementos del "array", está vació en este caso

        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            this[i] = argument
        }
    } else {
        var argument = arguments[0]

        if (typeof argument === 'number') {
            this.length = argument

            return
        }

        this[0] = argument
        this.length = 1
    }
}

Arroz.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]

        this[this.length] = argument
        this.length++
    }

    return this.length
}

Arroz.prototype.pop = function () {
    var lastIndex = this.length - 1

    var last = this[lastIndex]

    delete this[lastIndex]

    this.length--

    return last
}

Arroz.prototype.toString = function () {
    var string = 'Arroz ['

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        string += element

        if (i < this.length - 1)
            string += ', '
    }

    string += ']'

    return string
}

//SLICE

Arroz.prototype.slice = function (index, end) {
    var slicedArroz = new Arroz(); // Create a new Arroz object to keep  the sliced elements
    slicedArroz.length = 0; // Initialize length property

    // negative indices
    if (index < 0) {
        index = this.length + index;
        if (index < 0)
            index = 0;
    }
    if (end < 0) {
        end = this.length + end;
        if (end < 0)
            end = 0;
    }

    // store the sliced elements in the new Arroz object
    for (var i = index; i < end && i < this.length; i++) {
        slicedArroz[i - index] = this[i]; // Assign element to the new  object
        slicedArroz.length++; // Increment length +1
    }

    return slicedArroz; // Return the sliced  object
};

//AT
Arroz.prototype.at = function (index) {
    // Ternary -> If the index is greater than -1, use the index. Otherwise, calculate the new index.
    var targetIndex = index > -1 ? index : this.length + index;

    // Return the element at the target index
    return this[targetIndex];
};

//EVERY: : instances whether all elements in the array pass the test by the provided callback; it returns a Boolean
Arroz.prototype.every = function (callback) {
    for (var i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

// INCLUDES: checks if a specific value exists in the array. Returns true if the value is in the array, false if not.
Arroz.prototype.includes = function (value) {
    // Iterate over the elements of the Arroz instance
    for (var i = 0; i < this.length; i++) {
        // Check if the current element is equal to the value
        if (this[i] === value) {
            // Return true if the value is found
            return true;
        }
    }
    // If the value is not found after iterating over all elements, return false
    return false;
};

//SOME: if one element passes the test provided by the function, return true, false if not.
Arroz.prototype.some = function (callback) {
    // Iterate through each element in the Arroz
    for (var i = 0; i < this.length; i++) {
        // Check if the callback function returns true for the current element
        if (callback(this[i], i, this)) {
            // If the condition is met for any element, return true
            return true;
        }
    }
    // If the condition is not met for any element, return false
    return false;
}
//SHIFT: removes the first element, and returns the removed one.

Arroz.prototype.shift = function () {
    var firstElement = this[0];

    for (var i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }

    this.length = this.length - 1;

    return firstElement;
};
//UNSHIFT:  adds elements to the beggining of the array and returns a new length

Arroz.prototype.unshift = function () {
    // Convert arguments to an array
    var args = Array.prototype.slice.call(arguments);

    // Shift elements to the right
    for (var i = this.length - 1; i >= 0; i--) {
        this[i + args.length] = this[i];
    }

    // Insert new elements at the beginning
    for (var j = 0; j < args.length; j++) {
        this[j] = args[j];
    }

    // Update the length property
    this.length += args.length;

    // Return the new length of the Arroz
    return this.length;
};


//FIND INDEX:returns the index of the first element, or -1 if not found

Arroz.prototype.findIndex = function (callback) {
    // Iterate  each element of the array
    for (var i = 0; i < this.length; i++) {
        // Call the callback function with the current element, index, and array
        if (callback(this[i], i, this)) {
            // If the callback returns true, return the index of the current element
            return i;
        }
    }
    // If no element satisfies the callback function, return -1
    return -1;
};


// FROM: creates a new instance from an iterable or array-like object
Arroz.from = function (arrayLike, formula) {
    // Create a new Arroz instance
    var newArray = new Arroz();

    // Copy elements directly if no formula function is provided
    if (formula === undefined) {
        for (var element = 0; element < arrayLike.length; element++) {
            newArray[newArray.length] = arrayLike[element];
        }
    } else {
        // Apply formula function to each element if provided
        for (var element = 0; element < arrayLike.length; element++) {
            newArray[newArray.length] = formula(arrayLike[element]);
        }
    }

    // Return the new Arroz instance
    return newArray;
};

// FOR EACH: 
Arroz.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        callback(element, i, this);
    };

}
//FIND
Arroz.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        var matches = callback(element, i, this); // Corrected typo here
        if (matches) return element;
    }
};

//FROM:
function Arroz() { }

// Define the from method on the Arroz prototype
Arroz.prototype.from = function (arroz) {
    var instance = new Arroz();

    for (var i = 0; i < arroz.length; i++) {
        var element = arroz[i];
        instance[instance.length++] = element;
    }

    return instance;
};
module.exports = Arroz
