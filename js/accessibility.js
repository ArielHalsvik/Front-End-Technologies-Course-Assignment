// Increases font size by 20%
$(function() {
    $("#accessToggle").on("change", function() {
        if ($(this).prop("checked")) {
            $("p").css("font-size", "120%");
        } else {
            $("p").css("font-size", "");
        };
    });
});