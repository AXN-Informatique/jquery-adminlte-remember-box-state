
(function($) {

    $.fn.adminlteRememberBoxState = function() {

        if (this.length > 1) {
            this.each(function() {
                $(this).rememberBoxState();
            });
            return this;
        }

        var $btn = $(this);

        var $btnIcon = $btn.find('.fa');
        var $box = $btn.closest('div.box');
        var storageId = $box.prop('id');

        if (window.localStorage.getItem(storageId) === 'close') {
            $btnIcon.removeClass('fa-minus').addClass('fa-plus');
            $box.addClass('collapsed-box');
        } else {
            $btnIcon.removeClass('fa-plus').addClass('fa-minus');
            $box.removeClass('collapsed-box');
        }

        return $btn.on('click', function(e) {
            if ($box.hasClass('collapsed-box')) {
                // il est ouvert
                window.localStorage.setItem(storageId, 'open');
            } else {
                // il est fermé
                window.localStorage.setItem(storageId, 'close');
            }
        });
    };

})(jQuery);
