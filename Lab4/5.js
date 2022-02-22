/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let Stack = Array();
    let topStack;
    for(let i=0; i < str.length; i++){
        if(str[i] === '<' || str[i] === '[' || str[i] === '(')
            Stack.push(str[i]);
        else{
            topStack = Stack.pop();
            if(!(topStack === '<' && str[i] === '>' || topStack === '(' && str[i] === ')' || topStack === '[' && str[i] === ']'))
                return false;
        }
    }
    if (Stack.length === 0)
        return true;
    else return false;  
}

module.exports = checkBrackets;
