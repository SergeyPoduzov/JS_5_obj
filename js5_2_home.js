/*2. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, 
третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. 
Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].*/

function range(finish, start, step=1){

    let array=[];
    for(let i=finish; i<start; i=i+step){
        array.push(i)
    }
    return array


}

console.log(range(1, 10,2))
