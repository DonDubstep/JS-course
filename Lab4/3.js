/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    if (str.length === 0)
        return "";
    let ret = str[0];
    let curr_el = str[0];
    let count = 1;
    for(let i=1;i < str.length; i++)
        if(str[i] === curr_el)
            count++;
        else{
            curr_el = str[i];
            if(count > 1)
                ret = ret.concat(count);
            ret = ret.concat(str[i]);
            count = 1;
        }
    if(count > 1)
        ret = ret.concat(count);
    return ret;
}

module.exports = rle;
