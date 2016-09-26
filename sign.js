$(document).ready(function() {
  setInterval(function() {
    if (timer.hour < 6 && timer.hour < 24) {
      document.body.className = "open";
    } else {
    document.body.className = "close";
    }
  }, 1000);
});


$(document).ready(function() {
  setInterval(function() {
    if (timer.hour < 18 && timer.hour > 19) {
      document.body.className = "bar";
    }
  }, 1000);
});

$(document).ready(function() {
  setInterval(function() {
    if (timer.hour < 11 && timer.hour > 13) {
      document.body.className = "lunch";
    }
  }, 1000);
});

