"use strict";
/*
4* Написать генератор случайных “русских слов”. Сформировать слово используя правила:
- определить длину слова случайно, но в диапазоне от 3 до 5 букв;
- начинать слово с гласной или согласной (определить случайно);
- чередовать гласные и согласные буквы в слове;
- буквы выбираются случайно. */

let glassnyes = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];

let soglassnyes= ["б", "в", "г", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ"]; 

//Функция генерации случайного  числа от минимума до максимума
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }



let str_len=randomInteger(3, 5); //определить длину слова случайно, но в диапазоне от 3 до 5 букв;
let choose_letter=randomInteger(1, 2); //начинать слово с гласной или согласной (определить случайно)  1 - c гласной, 2- с согласной
let choose_w=randomInteger(0, 2) 

let check=true;
let str, num //вводит переменные - которе вводит пользователь - кол-во генерируемых слов
let word //генерируемое слово в виде массива
let word_new // //генерируемое слово в виде массива после join("")
let words=[] //генерируемый массиво слов
let check_word=true //порядок чередовения гласный и согласных (после добвления буквы меняем на противоположный)

//цикл ввода количества выводимых слов и проверка введены цифры или буквы
while (check){

    str = prompt("Введите количество слов: ");
    //проверка - нет ли в строке - не числовых значений
    if (isNaN(str) == false){
        num=parseInt(str,10)
        break;
    }
    
    else{
        alert("В строке присутствуют текстовые символы, введите еще раз количество генерируем слов цифрами ");
        continue;

    }
}

//цикл добавления слов в массив, num  - количество слов
for (let i=0; i<num;i++){
    str_len=randomInteger(3, 5); //определить длину слова случайно, но в диапазоне от 3 до 5 букв;
    word_new=creating_word(str_len,glassnyes,soglassnyes )
    words.push(word_new)
}

console.log(words)
alert("Получившийся массив сгенерированных слов: " + words)



//функция, которая создает одно слово.
function creating_word(number_letters,glassnyes,soglassnyes ){
    let glassnyes_len=glassnyes.length //количество гласных
    let soglassnyes_len=soglassnyes.length //количество согласных
    let word=[];
    let word_new;
    let check
    let letter_rand
    let choose_letter=randomInteger(1, 2); //начинать слово с гласной или согласной (определить случайно)  1 - c гласной, 2- с согласной
    if (choose_letter == 1) check=true
    else check=false
    while (word.length<=number_letters){
        if (check==true){
            letter_rand=randomInteger(0, glassnyes_len-1)
            word.push(glassnyes[letter_rand])
        }
        else{
            letter_rand=randomInteger(0, soglassnyes_len-1) 
            word.push(soglassnyes[letter_rand])
        }
        check  = !check
        if (word.length ==number_letters ) break
    }
    word_new=word.join("")
    return word_new

}
