"use strict";
var facto = function (n) {
    if (n <= 0) {
        return 1;
    }
    else {
        return n * facto(n - 1);
    }
};
console.log(facto(5));
