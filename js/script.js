$(document).ready(function() {
    $('#photo-viewer').photoViewer();
});

$(function () {
    $('#photo-viewer').show().on('click', '.photo-box', function (e) {
        e.preventDefault();
        
        var $clonedContent = $(this).clone();
        $clonedContent.find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });

        var $modal = $('.modal');
        if ($modal.length === 0) {
            $modal = $('<div class="modal"/>').appendTo('body');
            var $modalContent = $('<div class="modal-content"/>').appendTo($modal);
            var $close = $('<button role="button" class="modal-close">close</button>');

            $close.on('click', function(e) {
                e.preventDefault();
                $modal.hide();
            }).appendTo($modalContent);
        }

        $('.modal-content').empty().append($clonedContent);

        function centerModal() {
            var top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $(window).scrollTop(),
                left: left + $(window).scrollLeft()
            });
        }

        $modal.show();
        centerModal();

        $(window).on('resize', centerModal);
    });
});