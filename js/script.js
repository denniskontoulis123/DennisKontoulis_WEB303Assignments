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
        let table = $('<table>').addClass('character-table');
        let headerRow = $('<tr>').append(
            '<th>First Name</th>',
            '<th>Last Name</th>',
            '<th>Age</th>',
            '<th>Occupation</th>',
            '<th>School</th>',
            '<th>Ability</th>'
        );
        table.append(headerRow);

        $.each(characters, function(i, character) {
            let row = $('<tr>').append(
                `<td>${character.firstName}</td>`,
                `<td>${character.lastName}</td>`,
                `<td>${character.age}</td>`,
                `<td>${character.occupation}</td>`,
                `<td>${character.school}</td>`,
                `<td>${character.ability}</td>`
            );
            table.append(row);
        });

        $('body').append(table);
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

});