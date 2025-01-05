function execute() {
    var today = new Date();
    var currentDay = today.getDate();
    var currentMonth = today.getMonth() + 1; // Months are zero-based
    var currentYear = today.getFullYear();

    var userDay = parseInt(document.getElementById("day").value);
    var userMonth = parseInt(document.getElementById("month").value);
    var userYear = parseInt(document.getElementById("year").value);

    if (isNaN(userDay) || isNaN(userMonth) || isNaN(userYear)) {
        alert("Please enter valid date values.");
        return;
    }

    var day = currentDay - userDay;
    var month = currentMonth - userMonth;
    var year = currentYear - userYear;

    if (day < 0) {
        month--;
        day += daysInMonth(currentMonth - 1, currentYear);
    }

    if (month < 0) {
        year--;
        month += 12;
    }

    document.getElementById("days").innerHTML = day;
    document.getElementById("months").innerHTML = month;
    document.getElementById("years").innerHTML = year;

    console.log(day);
    console.log(month);
    console.log(year);
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
