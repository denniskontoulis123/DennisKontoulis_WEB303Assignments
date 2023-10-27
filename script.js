/*
    Assignment 05
    Name: Dennis Kontoulis
    Date: 27-10-2023
*/
import { ContentItem } from 'ContentItem.js';

$(document).ready(function () {
    let smartphones = [
        new ContentItem(0, "iPhone 15", "Apple's latest and greatest phone", "Flagship"),
        new ContentItem(1, "Samsung Galaxy S23", "The latest and most premium Samsung", "Flagship"),
        new ContentItem(2, "Google Pixel 8 Pro", "Google's best offering yet", "Flagship"),
        new ContentItem(3, "Motorola Razr+", "Flip Phones are back, baby", "Flagship"),
        new ContentItem(4, "New Phone For 2023", "I ran out of phones but needed a 5th for examples sake", "Flagship"),
    ];

    $("#content h2").text("Top Smartphones 2023"); 

    smartphones.forEach(smartphone => {
        $("content-item-list").append(smartphone.toString());
    });

    $(".content-item-wrapper").css({
        "border": "2px solid black",
        "width": "300px",
        "padding": "10px",
        "margin": "20px auto"
    });


});


