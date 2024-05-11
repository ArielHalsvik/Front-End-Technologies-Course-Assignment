// Function to change "Contact Information"
$("document").ready(function() {
    $("#addInfo").click(function() {
        // Email information
        let email;
        do {
            email = prompt("What's your email address?");
            if (email.includes("@") && email.includes(".")) {
                break;
            } else {
                alert("Wrong input. Please provide a proper email address.");
            }
        } while (!email.includes("@") || !email.includes("."));

        // Telephone number information
        let telephone_number;
        do {
            telephone_number = parseInt(prompt("What's your phone number?"));
            if (isNaN(telephone_number)) {
                alert("Wrong input. Please provide a proper phone number.");
            } else {
                break;
            }
        } while (isNaN(telephone_number));

        // Address information
        let address;
        do {
            address = prompt("Where do you live?");
            if (/[a-z]/gi.test(address) && /[0-9]/g.test(address)) {
                break;
            } else {
                alert("Wrong input. Please provide a proper address.");
            };
        } while (!/[a-z]/gi.test(address) || !/[0-9]/g.test(address));

        // Takes the user input and places it in the document
        $("#contactDetails p").each(function(index) {
            if (index === 0) {
                $(this).html(telephone_number);
            } else if (index === 1) {
                $(this).html(email);
            } else if (index === 2) {
                $(this).html(address);
            };
        });

        console.log("From: " + email + "\n" + "Contact: " + telephone_number + "\n" + "Address: " + address);
    });
});