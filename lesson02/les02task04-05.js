"use strict";

/**
 * Функция сложения чисел a и b
 * @throw один из параметров не является числом
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
function add(a, b) {
    if (typeof(a) != "number") {
        throw "Error: param a is no a number";
    }
    if (typeof(b) != "number") {
        throw "Error: param b is no a number";
    }
    return a + b;
}

/**
 * Функция вычитания чисел a и b
 * @throw один из параметров не является числом
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
function sub(a, b) {
    if (typeof(a) != "number") {
        throw "Error: param a is no a number";
    }
    if (typeof(b) != "number") {
        throw "Error: param b is no a number";
    }
    return a - b;
}

/**
 * Функция умножения чисел a и b
 * @throw один из параметров не является числом
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
function mult(a, b) {
    if (typeof(a) != "number") {
        throw "Error: param a is no a number";
    }
    if (typeof(b) != "number") {
        throw "Error: param b is no a number";
    }
    return a * b;
}

/**
 * Функция деления чисел a и b
 * @throw один из параметров не является числом
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
function div(a, b) {
    if (typeof(a) != "number") {
        throw "Error: param a is no a number";
    }
    if (typeof(b) != "number") {
        throw "Error: param b is no a number";
    }
    return a / b;
}
