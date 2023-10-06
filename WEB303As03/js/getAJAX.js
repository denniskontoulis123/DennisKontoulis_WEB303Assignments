$(document).ready(function() {
    getTeamAJAX();
});

function getTeamAJAX() {
    $.ajax({
        url: "team.json",
        type: "GET",
        beforeSend: function() {
            $("#team").html("Loading");
        },
        success: function(data) {
            displayTeamData(data);
        },
        error: function(){
            $("#team").html("Content could not be found.");
        }
    });
}

function DisplayTeamData(data) {
    $("team").empty(); // dump the stuff like last file
    $.each(data, function(index, member) { // iterate and show all
        $("#team").append('<h2>' + member.name + '</h2>');
        $("#team").append('<h5>' + member.position + '</h5>');
        $("#team").append('<p>' + member.bio + '</p>');
    });
}