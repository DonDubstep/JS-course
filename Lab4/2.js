/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let el = 0;
    let iel = str.length - 1;
    while(true){
        if(str[el] === str[iel]){
            el++;
            iel--;
        }
        else return false;
        if(el === str.length)
            break;
    }
    return true;
}

module.exports = isPalindrome;
