// Function to change "about me" content
$("document").ready(function() {
    // Changes "Something about me" section
    $("p:contains('Something about me')").each(function(index){
        if (index === 0) {
            $(this).html("<p>I have a cat at home who is adoooorable!</p>");
            $(this).addClass("something");
        } else if (index === 1) {
            $(this).html("<p>I also like to draw and have done so most of my life!</p>");
            $(this).addClass("something");
        };
    });

    // Changes "Student name" section
    let studentName = $("span.aboutme")
    let spanText = studentName.text();
    spanText = spanText.replace("| student name |", "Ariel Halsvik");
    studentName.text(spanText);

    // Changes background color when the "Something about me" section is clicked
    $(".something").click(function() {
        $(this).css("background-color", "powderblue").css("color", "white");
    });
});