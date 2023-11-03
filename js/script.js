$(document).ready(function() {
    // accordion stuff
    $("#accordion h2").click(function () {
        var isPanelOpen = $(this).next().is(":visible");

        $(this).closest('#accordion').find('.content').slideUp();

        // expand panel if not open
        if (!isPanelOpen) {
            $(this).next().slideDown();
        }
    });

    // tab functionality
    $("#tabs ul li a").click(function(e) {
        e.preventDefault();

        // cuts the class
        $("#tabs ul li a").removeClass("active");

        // add class
        $(this).addClass("active");

        // hide tab
        $(".tab-content").hide();

        // show content
        $($(this).attr('href')).show();
    });

    $("#tabs ul li:first-child a").click();
})