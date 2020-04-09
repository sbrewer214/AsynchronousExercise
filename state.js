function requestComplete(data) {
    $("#fullState").text("Full State Name: " + data);
}

$(document).ready(function() {
    $("#stateForm").on("submit", function() {
        var newJersey = $("#stateAbbrev").val();
        var userInput  = { 'state': newJersey };
        $.ajax({
            type: "POST",
            url: "state.php",
            dataType: "json",
            success: requestComplete,
            data: userInput
        });
        return false;
    });
});