/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let temp = str.split(/[' '','\]]/);
    let j=0;
    let ret = Array ();
    for(let i=0; i < temp.length; i++)
        if(temp[i] != ""){
            ret[j] = Number(temp[i]);
            j += 1;
        }
    let max, min;
    max = min = ret[0];
    for (let i = 0; i < ret.length; i++){
        if (isNaN(ret[i]))
            continue;  
        if(Number.isNaN(max) || (ret[i] > max))
                max = ret[i];
        if ((ret[i] < min) || Number.isNaN(min))
            min = ret[i];
    }
    return {min: min, max: max};
}

module.exports = getMinMax;