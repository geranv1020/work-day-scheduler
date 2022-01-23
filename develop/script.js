// current date at top of the page 

$(document).ready(function () {
    $("#currentDay").text("Today is " + moment().format("dddd, MMMM Do YYYY"));
});

// save schedule info
$(document).ready(function () {
    $(.saveBtn).on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
})
// apply new class if the hour has passed


$("#09 .description").val(localStorage.getItem("#09"));
$("#10 .description").val(localStorage.getItem("#10"));
$("#11 .description").val(localStorage.getItem("#11"));
$("#12 .description").val(localStorage.getItem("#12"));
$("#13 .description").val(localStorage.getItem("#13"));
$("#14 .description").val(localStorage.getItem("#14"));
$("#15 .description").val(localStorage.getItem("#15"));
$("#16 .description").val(localStorage.getItem("#16"));
$("#17 .description").val(localStorage.getItem("#17"));