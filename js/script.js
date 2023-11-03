$(document).ready(function() {
    // accordion stuff
    $("#accordion h2").click(function () {
        var isPanelOpen = $(this).next().is(":visible");
    })
})