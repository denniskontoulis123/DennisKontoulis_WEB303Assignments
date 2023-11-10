(function ($) {
    $.fn.photoVier = function() {
        var $photoBox = this.find(.'photo-box');
        var $thumbnails = this.find('.thumbnail-anchor');

        $thumbnails.click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var newSrc = $this.attr('href');

            $photoBox.removeClass('is-loading').css('background-image', 'url('+ newSrc +')');
            $thumbnails.removeClass('active');
            $this.addClass('active');
        });

        return this;
    };
})(jQuery);
$(document).ready(function() {
    $('photo-viewer').photoViewer();
});