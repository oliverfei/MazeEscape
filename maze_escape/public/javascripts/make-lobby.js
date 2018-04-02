$(() => {
    let $formbtn = $('#form-submit-btn');
    let $form = $('#create-room-form');
    let $roomName = $('#room-name');
    let $selectedMap = $('#selected-map');
    let $mapDetails = $('#map-details');
    let $alertDiv = $('#unsuccessful-alert-div');
    let $alert = $('#unsuccessful-alert');
    let alertVisible = false;

    $formbtn.on('click', () => {
        let errString = "";
        if (!$roomName.val()) {
            errString = appendToErrString(errString,"Please enter a valid Room Name");
        } else if ($roomName.val().length < 3) {
            errString = appendToErrString(errString,"Room Name must be at least 3 characters long");
        }

        if ($selectedMap.val() == "default") {
            errString = appendToErrString(errString,"Please select a Map");
        }

        if (!alertVisible) {
            alertVisible = true;
        } else {
            $alertDiv.hide();
        }
        $alertDiv.slideToggle();

        $alert.html(errString);

        if (!errString) {
            $form.submit();
        }
    });

    function appendToErrString(errString,err) {
        if (errString) {
            errString += '<br>- '+err;
        } else {
            errString = "- "+err;
        }
        return errString;
    }

    let mapDetails = {
        maze_1: 'Librarian (1) / Escaper (1)',
        escape_the_house: 'Investigator (1) / Guests (2) / Haunter (1)',
        maze_escape: 'Librarian (1) / Runner (1)',
        hidden_man: 'Hidden-Man (1) / Chasers (3)'
    };

    $selectedMap.on('change', () => {
        $mapDetails.html(mapDetails[$selectedMap.val()]);
    });
});