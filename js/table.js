// Add row function
function addRow(id, icon, description, info, image) {
    let table = document.getElementById("personalTable");
    let body = table.getElementsByTagName("tbody")[0];

    let newRow = body.insertRow();

    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = id;

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = icon;

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = description;

    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = info;

    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = image;
}

// Adds the information into the table
addRow("Airplane", '<i class="bi bi-airplane-fill"></i>', "A vehicle with wings and engines.", "It moves in the air like a bird!", '<img src="./img/airplane.jpg" width="100px"</img>');
addRow("Alarm Clock", '<i class="bi bi-alarm"></i>', "A device that shows time and helps you wake up.", "It wakes you up with a racing heart!", '<img src="./img/alarm.jpg" width="100px"</img>');
addRow("Bag", '<i class="bi bi-bag-fill"></i>', "Fabric that holds your stuff for you.", "Be careful not to overfill it, it's heavy!", '<img src="./img/backpack.jpg" width="100px"</img>');
addRow("Balloon", '<i class="bi bi-balloon-fill"></i>', "A rubber bag with air.", "Keep needles away from it or you might hear a loud 'BANG'!", '<img src="./img/balloons.jpg" width="100px"</img>');
addRow("Band-Aid", '<i class="bi bi-bandaid-fill"></i>', "A little bandage of gauze and adhesive tape.", "Protects your wounds from bacteria and your clothes from blood!", '<img src="./img/bandaid.jpg" width="100px"</img>');

// Opens images in new window when clicked
$("document").ready(function() {
    $("td img").click(function() {
        let imageURL = $(this).attr("src");
        window.open(imageURL, "", "width = 500, height = 500");
    });
});

// Font color change when hovering
$("document").ready(function() {
    $("tbody tr:odd").hover(function(){
        $(this).css("color", "blue");
    });
    $("tbody tr:odd").mouseleave(function(){
        $(this).css("color", "");
    });
});