// var maxTime = 1000;
// function addition(num1, num2) {
//     return num1 + num2;
// }
// function subtraction(num1, num2) {
//     console.log(num1 - num2);
// }
// module.exports.mTime = maxTime;
// module.exports.add = addition;
// module.exports.subtract = subtraction;

// ---------------------------------------- //

// module.exports.mTime = 1000;
// module.exports.add = function (num1, num2) {
//     return num1 + num2;
// }
// module.exports.subtract = function (num1, num2) {
//     console.log(num1 - num2);
// }

// ---------------------------------------- //

module.exports = {
    mTime: 1000,
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        console.log(num1 - num2);
    }
}
