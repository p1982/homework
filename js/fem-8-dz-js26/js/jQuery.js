(function($) {
    $(function() {

        $('ul.tabs').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.centered-content').find('li.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);