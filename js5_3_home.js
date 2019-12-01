"use strict";

/*3. Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, 
а она выводит его содержимое.*/

let obj={
    first_name:"Иван",
    last_name:"Петров",
    age:38,
    interst:["Плавание", "Робототехника", "Рисование"],
    education:"ITMO",
    show:function(){
        document.write("<b>Имя</b>:"+this.first_name+"<br>")
        document.write("<b>Фамилия</b>:"+this.last_name+"<br>")
        document.write("<b>Возраст</b>:"+this.age+"<br>")
        document.write("<b>Интерсы</b>:"+"<br>")
        for (let i=0; i< this.interst.length;i++){
            document.write("<b>Интерс</b>:"+(i+1) +"-й  - это "+this.interst[i].toLowerCase()+"<br>")
        }
        document.write("<b>Место обучения</b>:"+this.education+"<br>")
    },
}

obj.show();

