/*
    Assignment #4
    Name: Dennis Kontoulis
    DLM: 2023-10-13
    Student #: 0798883
*/

$(function () {
    if (!navigator.geolocation) { // error msg for if geolocation dont work
        alert("Geolocation is not supported by your browser!");
        return;
    }

    function handleSuccess(position) { // variables for long + lat
        var currentLat = position.coords.latitude;
        var currentLon = position.coords.longitude;
        $('#locationhere').text("Latitude: "+ currentLat +", Longitude: " +  currentLon);

        var previousLocation = localStorage.getItem('location');
        if (previousLocation) {
            previousLocation = JSON.parse(previousLocation);
            var dist = calcDistanceBetweenPoints(currentLat, currentLon, previousLocation.lat, previousLocation.lon);
            $('<div>').text("Previous Location: Latitude: " + previousLocation.lat + ", Longitude: " + previousLocation.lon).appendTo('#locationhere');
            $('<h3>').text('Welcome back!').appendTo('#locationhere');
            $('<p>').text('You traveled ' + dist.toFixed(2) + ' meters since your last visit.').appendTo('#locationhere');
        } else {
            $('<h3>').text('Welcome to the page for the first time!').appendTo('#locationhere');
        }

        localStorage.setItem('location', JSON.stringify({ lat: currentLat, lon: currentLon}));
    }

    function handleError() {
        alert("You must allow gelocation in order to use the application.");
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
})



    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    };


