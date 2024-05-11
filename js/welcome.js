// Like button (Toast)
$(document).ready(function() {
    $("#liveToastBtn").click(function() {
        $("#liveToast").toast("show");
    });
});

// I'm bored button (GET request)
$(document).ready(function() {
    $("#boredBtn").click(function() {
        let request = new XMLHttpRequest();
        request.open("GET", "https://www.boredapi.com/api/activity/");
        request.onload = function() {
            let response = request.response
            let parsedData = JSON.parse(response);
            console.log(parsedData);
        };
        request.send();
    });
});