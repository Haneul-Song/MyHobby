$(document).ready(function () {
    $("#calculateButton").click(function () {
        // Validate the input
        var hours = $("#hoursInput").val();
        if (hours <= 0) {
            alert("Please enter a positive number of hours.");
            return;
        }

        // Calculate the total cost
        var hourlyRate = parseFloat($("#hourlyRate").val());
        var totalCost = hourlyRate * hours;
        $("#totalCost").val(`$${totalCost.toFixed(2)}`);
    });
});

