"use strict";
/*
1. Написать функцию сравнения двух массивов. Функция принимает на вход два массива, 
сравнивает их и возвращает true, если массивы равны и false, если не равны. */


// проверка по трем критериям 1) что оба являеются массивами. 2) длина массивов совпдает. 3) количество каждого элемента равна кол-ву в другом.
// может получится ситация что массивы имеют одинаковые элементы, но их кол-во их разное количество в массиве нарпимер a=["Петя","Дима","Петя"], b=["Дима","Дима","Петя"], эти массивы не равны


//вначале напишем функцию, которая возвращается, сколько раз элемент item входит в массив array

function accounting(array, item){
    let indices = [];
    let idx = array.indexOf(item);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(item, idx + 1);
      }
    return indices.length
}



function ravenstvo(array_a,array_b){
    if (!Array.isArray(array_a)||!Array.isArray(array_b)) return false
    if (array_a.length !== array_b.length) return false

    //ведем временнуж переменную которая будет показыыать сколько раз количество лемента в одном массиве отлчается от кол-ва в другом
    let numbering=0
    for (let i=0; i<array_a.length;i++){
        if (accounting(array_a, array_a[i]) !== accounting(array_b, array_a[i])) numbering++;

    }
    if (numbering>0) return false
    else return true
}

//let a=[1,2,2,4,5,4]
// let b=[4,5,2,4,2,1]

let a=["Петя","Дима","Петя"]; 
let b=["Дима","Петя","Петя"];



console.log(ravenstvo(a,b))

