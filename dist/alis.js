"use strict";
const courseName = "next lavel web development";
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 30, (x, y) => x + y);
