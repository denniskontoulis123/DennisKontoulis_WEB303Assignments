// WEB303 Assignment 2
// Name: Dennis Kontoulis
// Student #: 0798883

document.addEventListener("DOMContentLoaded", function () {
    
    const contentDiv = document.querySelector("#content");

    // adding event listeners to links
    ["prospect", "convert", "retain"].forEach((id) => {
        const link = document.getElementById(id);
        link.addEventListener("click", function (e) {
            e.preventDefault();
            loadContent(id);
        });
    });

    function loadContent(id) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `${id}.html`, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // clear and hide the content div
                $(contentDiv).hide().html("");

                // insert new content
                contentDiv.innerHTML = xhr.responseText;

                // fade in for the sake of looking ok when the display changes
                $(contentDiv).fadeIn();
            }
        };
        xhr.send();
    }
});

