/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/


function get1DArray(arr, ret_arr) {
    if(ret_arr === undefined)
        ret_arr = Array();
    for (let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            get1DArray(arr[i], ret_arr);
        }
        else{
            ret_arr.push(arr[i]);
        }
    }
    return ret_arr;
}

module.exports = get1DArray;
