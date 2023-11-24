$(document).ready(function() {
    // Initialize variables for original data and sort state
    let originalData = [];
    let sortState = {
        firstName: 'none',
        lastName: 'none',
        age: 'none',
        occupation: 'none',
        school: 'none',
        ability: 'none'
    };

    // Fetching character data from the JSON file
    $.ajax({
        url: 'characters.json', 
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            originalData = [...data];
            createTable(data);
        }
    });

    // Function to create the table with character data
    function createTable(characters) {
        let tbody = $("#charactersTable tbody");
        tbody.empty();
        $.each(characters, function(i, character) {
            let row = $('<tr>').append(
                `<td>${character.firstName}</td>`,
                `<td>${character.lastName}</td>`,
                `<td>${character.age}</td>`,
                `<td>${character.occupation}</td>`,
                `<td>${character.school}</td>`,
                `<td>${character.ability}</td>`
                `<td>${character.date}</td>`
            );
            tbody.append(row);
        });
    }

    // Add click event listeners for sorting on table headers
    $("#charactersTable th a").click(function(e) {
        e.preventDefault();
        let column = $(this).attr('data-column');
        sortTable(column);
    });

    // Sort table function
    function sortTable(column) {
        let rows = $('#charactersTable tbody tr').get();
        rows.sort(function(a, b) {
            let valA = $(a).children('td').eq(getColumnIndex(column)).text();
            let valB = $(b).children('td').eq(getColumnIndex(column)).text();
            if (sortState[column] === 'asc') {
                return valA.localeCompare(valB);
            } else {
                return valB.localeCompare(valA);
            }
        });

        $.each(rows, function(index, row) {
            $('#charactersTable tbody').append(row);
        });

        // Update sort state and chevrons
        updateSortStateAndChevrons(column);
    }

    // Get column index based on data attribute
    function getColumnIndex(column) {
        // Map your column data attributes to the index
        return {
            'firstName': 0,
            'lastName': 1,
            'age': 2,
            'occupation': 3,
            'school': 4,
            'ability': 5
        }[column];
    }

    // Update sort state and chevrons
    function updateSortStateAndChevrons(column) {
        // Reset all chevrons
        $("#charactersTable th span").html('');

        if (sortState[column] === 'none' || sortState[column] === 'desc') {
            sortState[column] = 'asc';
            $(`#chevron${capitalizeFirstLetter(column)}`).html('&#x25B2;');
        } else if (sortState[column] === 'asc') {
            sortState[column] = 'desc';
            $(`#chevron${capitalizeFirstLetter(column)}`).html('&#x25BC;');
        } else {
            sortState[column] = 'none';
        }
    }

    // Capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Search functionality
    $('#searchBox').on('input', function() {
        let searchTerm = $(this).val().toLowerCase();
        $('#charactersTable tr').each(function() {
            let firstName = $(this).find('td:first').text().toLowerCase();
            if (firstName.includes(searchTerm)) {
                $(this).css({'background-color': 'darkgreen', 'color': 'white'});
            } else {
                $(this).css({'background-color': '', 'color': 'black'});
            }
        });
    });

    // Filter buttons functionality
    $('#filterAM').on('click', function() {
        filterNames('A', 'M');
    });
    $('#filterNZ').on('click', function() {
        filterNames('N', 'Z');
    });

    function filterNames(start, end) {
        $('#charactersTable tr').each(function() {
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
        $('#filterAM').text(`A - M (${countAM})`);
        $('#filterNZ').text(`N - Z (${countNZ})`);
    }
});
