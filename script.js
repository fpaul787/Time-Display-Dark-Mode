document.addEventListener("DOMContentLoaded", function (event) {
  var selector = document.querySelector("input[name=darkmodeswitch]");
  selector.addEventListener("change", function (event) {
    if (selector.checked) {
      var body = document.getElementById("body");
      body.classList.add("dark");

      var time_display = document.getElementById("time-display");
      time_display.classList.add("time-display-darkmode");

      var time_display_text = document.getElementById("time-display-text");
      time_display_text.classList.add("time-display-text-darkmode");

      var fact_display = document.getElementById("fact-display");
      fact_display.classList.add("fact-display-darkmode");
    } else {
      var body = document.getElementById("body");
      body.classList.remove("dark");

      var time_display = document.getElementById("time-display");
      time_display.classList.remove("time-display-darkmode");

      var time_display_text = document.getElementById("time-display-text");
      time_display_text.classList.remove("time-display-text-darkmode");

      var fact_display = document.getElementById("fact-display");
      fact_display.classList.remove("fact-display-darkmode");
    }
  });
});

function updateTime() {
  //   var currentTime = new Date();
  //   var hours = currentTime.getHours();
  //   var minutes = currentTime.getMinutes();
  //   if (minutes < 10) {
  //     minutes = "0" + minutes;
  //   }
  //   var t_str = hours + ":" + minutes + " ";
  //   if (hours > 11) {
  //     t_str += "PM";
  //   } else {
  //     t_str += "AM";
  //   }

  var current_time = new Date().toLocaleTimeString();

  document.getElementById("time-display-text").innerHTML = current_time;
}

window.addEventListener("load", function () {
  setInterval(updateTime, 1000);
});
