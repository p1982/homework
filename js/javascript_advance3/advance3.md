Обьясните своими словами, как вы понимаете, как работает прототипное наследование в Javascript
У нас есть объект со своими свойствами и методами, и мы хотим создать другие объекты как его слегка изменённые варианты. Мы хотели бы повторно использовать то, что есть у первого объекта, не копировать/переопределять его методы, а просто создать новый объект на его основе.
Прототипное наследование — это возможность языка, которая помогает в этом.
Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берёт его из прототипа. 