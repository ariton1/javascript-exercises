const palindromes = function (str) {
    let original = str.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
    let reverse = original.split('').reverse().join('');

    return original === reverse;
};

module.exports = palindromes;
