
// current date at top of the page 
$(document).ready(function () {
    $("#currentDay").text("Today is " + moment().format("dddd, MMMM Do YYYY"));
});

// save schedule info
$(document).ready(function () {
    // saveBtn click listener
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save in localStorage
        localStorage.setItem(time, text);
    })

    function timeChecker () {
        var timePresent = moment().hour();

        // keep track of time change
        $("textarea").each(function () {
            var textTime = parseInt($(this).attr("id"));
                
            // if current time is past the schedule hour, change class
            if (textTime < timePresent) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            // if current time is equal to the schedule hour, change class
            else if (textTime === timePresent) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            // if current time is before the schedule hour, change class
            else if (textTime > timePresent) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }


    // Get item from local storage
    $("#09 .description").val(localStorage.getItem("#09"));
    $("#10 .description").val(localStorage.getItem("#10"));
    $("#11 .description").val(localStorage.getItem("#11"));
    $("#12 .description").val(localStorage.getItem("#12"));
    $("#13 .description").val(localStorage.getItem("#13"));
    $("#14 .description").val(localStorage.getItem("#14"));
    $("#15 .description").val(localStorage.getItem("#15"));
    $("#16 .description").val(localStorage.getItem("#16"));
    $("#17 .description").val(localStorage.getItem("#17"));

    timeChecker();
});