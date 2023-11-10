$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        var $modal = $('.modal');
        if ($modal.length === 0) {
            // Create the modal elements if they do not exist
            $modal = $('<div class="modal"/>').appendTo('body');
            var $modalContent = $('<div class="modal-content"/>').appendTo($modal);
            var $close = $('<button role="button" class="modal-close">close</button>');

            // Close button event handler
            $close.on('click', function(e) {
                e.preventDefault();
                $modal.hide();
            }).appendTo($modalContent);
        }

        // Add the cloned content to the modal
        $('.modal-content').empty().append($clonedContent);

        // Function to center the modal on the page
        function centerModal() {
            var top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $(window).scrollTop(),
                left: left + $(window).scrollLeft()
            });
        }

        // Open the modal with the cloned content
        $modal.show();
        centerModal();

        // Bind the window resize event to re-center the modal
        $(window).on('resize', centerModal);
    });
});
