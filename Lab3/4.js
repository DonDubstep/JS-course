/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30 
 * как считать: (3 + 6 + 4 + 2) * 2
 */

function prettySum(arr) {
    let length = arr.length;
    let i = 0, sum = 0;
    while(true){
        if(i >= length)
            break;
        sum += arr[i];
        i += 2;
   }
   return sum * arr[length - 1];
}

module.exports = prettySum;