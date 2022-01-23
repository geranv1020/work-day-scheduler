const moment = require("moment");

moment().format("dddd, MMMM Do YYYY");

// apply new class if the hour has passed
if (moment().isAfter(time)) {
    $(taskEl).addClass("past");
}
else if (Math.abs(moment().diff(time, "hours")) <=1) {
    $(taskEl).addClass("past");
}
