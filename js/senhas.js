function load () {
    let servingNumber = localStorage.getItem("servingNumber");
    let ticketNumber = localStorage.getItem("ticketNumber");

    if (servingNumber === null)
        servingNumber = 0;
    if (ticketNumber === null)
        ticketNumber = 0;

    localStorage.setItem("servingNumber", servingNumber);
    var formattedNumber = ("0" + servingNumber).slice(-2);
    document.getElementById("number").innerText = formattedNumber.toString();
    localStorage.setItem("ticketNumber", ticketNumber);
    var formattedNumber2 = ("0" + ticketNumber).slice(-2);
    document.getElementById("number2").innerText = formattedNumber2.toString();

};

function newTicket() {
    let ticketNumber = localStorage.getItem("ticketNumber");

    ticketNumber++;
    localStorage.setItem("ticketNumber", ticketNumber);
    var formattedNumber = ("0" + ticketNumber).slice(-2);
    document.getElementById("number2").innerText = formattedNumber.toString();

}

function servingTicket() {
    let servingNumber = localStorage.getItem("servingNumber");

    servingNumber++;
    localStorage.setItem("servingNumber", servingNumber);
    var formattedNumber = ("0" + servingNumber).slice(-2);
    document.getElementById("number").innerText = formattedNumber.toString();

}