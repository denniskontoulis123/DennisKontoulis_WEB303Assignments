$(document).ready(function() {
    getTeamJSON();
});

function getTeamJSON() {
    $.getJSON("team.json", function(data) {
        displayTeamData(data);
    });
}

function displayTeamData(data) {
    $("#team").empty() // dumps the content
    $.each(data, function(index, member) { // iterate and show all
        $("team").append('<h2>' + member.name +'</h2>');
        $("team").append('<h5>' + member.position +'</h5>');
        $("team").append('<p>' + member.bio +'</p>');
    });
}