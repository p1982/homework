// ## Задание
//
// Добавить в домашнее задание HTML/CSS №6 (Flex/Grid) различные эффекты с использованием jQuery
//
// #### Технические требования:
// - Добавить вверху страницы горизонтальное меню со ссылкой на все разделы страницы.
// - При клике на ссылку - плавно прокручивать страницу вниз до выбранного места.
// - Если прокрутить страницу больше чем на 1 экран вниз, справа внизу должна появляться кнопка "Наверх" с
// фиксированным позиционариванием. При клике на нее - плавно прокрутить страницу в самый верх.
// - Добавить под одной из секций кнопку, которая будет выполнять функцию `slideToggle()`
// (прятать и показывать по клику) для данной секции.
//
//     #### Литература:
// - [Якоря](http://htmlbook.ru/samhtml/yakorya)
// - [jQuery для начинающих](http://anton.shevchuk.name/javascript/jquery-for-beginners/)
// - [Стандартные анимации jQuery](http://jquery.page2page.ru/index.php5/%D0%AD%D1%84%D1%84%D0%B5%D0%BA%D1%82%D1%8B)

// на все ссылки получаем в хедере
// обработчик
// отменяем превент дефол перескока
const $arrow = $('#arrow')

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
});

$arrow.on('click', function () {

    $('html, body').animate({
        scrollTop: 0
    }, 1500);
});

$(document).on('scroll', function (){
    if(window.innerHeight < window.scrollY){
        $arrow.show()
    } else {
        $arrow.hide();
    }
})

$('#hide-content').on('click', function(){
    $( "#posts" ).slideToggle( "slow" ); // скрывыаем, или отображаем первый элемент <div> в документе
})