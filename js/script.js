(document).ready(function() {
    // Fetching character data from the JSON file
    $.ajax({
        url: 'characters.json', 
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            createTable(data);
            updateFilterCounts(data);
        }
    });

    // Function to create the table with character data
    function createTable(characters) {
        let tbody = $("#charactersTable tbody");
        $.each(characters, function(i, character) {
            let row = $('<tr>').append(
                `<td>${character.firstName}</td>`,
                `<td>${character.lastName}</td>`,
                `<td>${character.age}</td>`,
                `<td>${character.occupation}</td>`,
                `<td>${character.school}</td>`,
                `<td>${character.ability}</td>`
            );
            tbody.append(row);
        });
    }

    // Search functionality
    let searchBox = $('<input>').attr('type', 'text').attr('placeholder', 'Search by first name...');
    searchBox.on('input', function() {
        let searchTerm = $(this).val().toLowerCase();
        $('table tr').each(function() {
            let firstName = $(this).find('td:first').text().toLowerCase();
            if (firstName.includes(searchTerm)) {
                $(this).css({'background-color': 'darkgreen', 'color': 'white'});
            } else {
                $(this).css({'background-color': '', 'color': 'black'});
            }
        });
    });
    $('body').prepend(searchBox);


    // Filter buttons
    let buttonAM = $('<button>').text('A - M ()').on('click', function() {
        filterNames('A', 'M');
    });
    let buttonNZ = $('<button>').text('N - Z ()').on('click', function() {
        filterNames('N', 'Z');
    });

    $('body').append(buttonAM, buttonNZ);

    function filterNames(start, end) {
        $('table tr:gt(0)').each(function() {
            let lastName = $(this).find('td:nth-child(2)').text();
            if (lastName.charAt(0).toUpperCase() >= start && lastName.charAt(0).toUpperCase() <= end) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    function updateFilterCounts(characters) {
        let countAM = 0;
        let countNZ = 0;
        $.each(characters, function(i, character) {
            let firstLetter = character.lastName.charAt(0).toUpperCase();
            if (firstLetter >= 'A' && firstLetter <= 'M') countAM++;
            if (firstLetter >= 'N' && firstLetter <= 'Z') countNZ++;
        });
        buttonAM.text(`A - M (${countAM})`);
        buttonNZ.text(`N - Z (${countNZ})`);
    }
});