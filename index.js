const chalk = require('chalk');

// CONSOLE STYLING
function log(toLog) {
    console.log(toLog);
}

function red(toLog) {
    console.log(chalk.red(toLog));
}

function green(toLog) {
    console.log(chalk.green(toLog));
}

function yellow(toLog) {
    console.log(chalk.yellow(toLog));
}

function blue(toLog) {
    console.log(chalk.blue(toLog));
}

function cyan(toLog) {
    console.log(chalk.cyan(toLog));
}

function bold(toLog) {
    console.log(chalk.bold(toLog));
}

function italic(toLog) {
    console.log(chalk.italic(toLog));
}

function underline(toLog) {
    console.log(chalk.underline(toLog));
}

function purple(toLog) {
    console.log(chalk.magenta(toLog));
}

// MISC FUNCS
function random(from, to) {
    if (typeof from !== 'number' || typeof to !== 'number') throw new TypeError('Expected number arguments, instead got ' + typeof from + ' and ' + typeof to + '.')
    return Math.floor(Math.random() * (+to - +from)) + +from;
}

function rndArray(argArray) {
    if (!Array.isArray(argArray)) throw new TypeError('Argument must be an array.');
    return argArray[Math.floor(Math.random() * (+argArray.length - +0)) + +0]
}
async function sleep(_sleepTimeInMs) {
    return new Promise(_resolve => setTimeout(_resolve, _sleepTimeInMs));
}
async function delay(_sleepTimeInMs) {
    return new Promise(_resolve => setTimeout(_resolve, _sleepTimeInMs));
}

function genString(length, allowSpecial, allowNumbers) {
    if (typeof length !== 'number') throw new TypeError('Expected length to be a number, instead got ' + typeof length + '. Correct usage is genString(length | number, allowSpecial (allows special characters such as @, #, $) | boolean, allowNumbers | boolean');
    if (typeof allowNumbers !== "boolean") throw new TypeError('Expected allowNumbers to be a boolean, instead got ' + typeof allowNumbers + '.');
    if (typeof allowSpecial !== "boolean") throw new TypeError('Expected allowSpecial to be a boolean, instead got ' + typeof allowSpecial + '.');

    if (allowSpecial === true) {

        if (allowNumbers === true) {
            var result = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&**()":\';/.,`~|1234567890';
            var charLen = chars.length;
            for (var i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * charLen))
            }
        } else if (allowNumbers === false) {
            var result = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&**()":\';/.,`~|';
            var charLen = chars.length;
            for (var i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * charLen))
            }
        }
        return result;
    } else if (allowSpecial === false) {

        if (allowNumbers === true) {
            var result = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
            var charLen = chars.length;
            for (var i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * charLen))
            }
        } else if (allowNumbers === false) {
            var result = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charLen = chars.length;
            for (var i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * charLen))
            }
        }
        return result;

    } // closes the allowSpecial

}

function genHex() {
    let chars = 'abcdef0123456789';
    let generatedHex = '';
    for (var i = 0; i < 6; i++) {
        generatedHex += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return '#' + generatedHex;
}

module.exports.funcly = funcly;