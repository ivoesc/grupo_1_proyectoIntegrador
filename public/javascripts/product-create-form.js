$(document).ready(function() {
        $("#actorsSelect").select2({
                minimumSelectionLength: 3,
                maximumSelectionLength: 3,
                placeholder: 'Actores de la película:',
                allowClear: true,
                closeOnSelect: false
        });  
});

