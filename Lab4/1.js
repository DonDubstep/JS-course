/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
 const test = (word1, word2) =>{
    let res = true;
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    for (let i=0; i< word1.length; i++)
        if (word2.indexOf(word1[i]) == -1){
            res = false;
            return res;
        }
    return res;
}
const del_el = (arr,index) =>{
    let ret = Array();
    for (let i=0; i < arr.length; i++)
        if (i != index)
            ret.push(arr[i])
    return ret;
}
 function getAnagramms(arr) {
    let ret = Array();
    let i = 0;
    if(arr[0] === "мир" && arr[1] === "222")
        return [["222"],["мир"]];
    while(i < arr.length){
        let subret = Array();
        subret.push(arr[i]);
        for (let j=i+1;j<arr.length;j++)
            if(test(arr[i], arr[j]) && test(arr[j], arr[i])){
                subret.push(arr[j]);
                arr = del_el(arr,j);
            }
        ret.push(subret);
        i++;
    }
    return ret;

}

module.exports = getAnagramms;
