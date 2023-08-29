
getValue();
c();
function getValue () {
    console.log("getValue");
};

let c = function () {
    console.log("c");
};

let a = undefined;
let b = undefined;

function getValue(d, c) {
    let sum = a + b;
    let remainder = a - b;
    console.log(sum, remainder);
    return sum, remainder;
}

getValue();
console.log();

function getValue1 (value1, value2) {
    let value3 = value1 + value2;
    console.log(value3);
    return value3;
}
getValue1('sdfsdg', null);




