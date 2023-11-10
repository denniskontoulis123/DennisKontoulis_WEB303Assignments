(function ($) {
    $.fn.photoViewer = function() {
        var $photoBox = this.find('.photo-box');
        var $thumbnails = this.find('.thumbnail-anchor');

        $thumbnails.click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var newSrc = $this.attr('href').replace('\\', '/'); // Correct the image path

            // change main image
            $photoBox.removeClass('is-loading').css('background-image', 'url('+ newSrc +')');

            // thumbnail update
            $thumbnails.removeClass('active');
            $this.addClass('active');
        });

        return this;
    };
})(jQuery);

