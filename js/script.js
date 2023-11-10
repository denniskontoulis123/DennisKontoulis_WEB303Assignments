$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        // Define the modal object
var modal = (function() {
    // Private variables
    var $window = $(window),
        $modal = $('<div class="modal"/>'),
        $content = $('<div class="modal-content"/>'),
        $close = $('<button role="button" class="modal-close">close</button>');

    // Append the close button and content to the modal
    $modal.append($content, $close);

    // Close button event handler
    $close.on('click', function(e) {
        e.preventDefault();
        modal.close();
    });

    // Public methods
    return {
        // Center the modal on the page
        center: function() {
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2,
                left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        },

        // Open the modal with specified settings
        open: function(settings) {
            $content.empty().append(settings.content);

            $modal.css({
                width: settings.width || 'auto', // Set width
                height: settings.height || 'auto' // Set height
            }).appendTo('body');

            modal.center(); // Center the modal
            $(window).on('resize', modal.center); // Adjust on window resize
        },

        // Close the modal
        close: function() {
            $content.empty();
            $modal.detach();
            $(window).off('resize', modal.center);
        }
    };
})();
},}
);
