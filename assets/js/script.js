let currentDay = $("#currentDay");
let today = dayjs();
let saveBtn = document.querySelectorAll(".saveBtn");
let description = document.querySelectorAll(".description");

// TODO: Add code to display the current date in the header of the page.
function displayTime() {
  currentDay.text(today.format("dddd, MMM DD"));
}
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour.
function ColorCalender() {
  var timedivs = document.getElementsByClassName("row");
  var divId;
  var currenttime = Number(today.format("HH"));
  for (var i = 0; i < timedivs.length; i++) {
    divId = Number(timedivs[i].id.slice(5));

    if (divId == currenttime) {
      $(timedivs[i]).addClass("present");
    } else if (divId < currenttime) {
      $(timedivs[i]).addClass("past");
    } else if (divId > currenttime) {
      $(timedivs[i]).addClass("future");
    }
  }
}
//store the schedule to the local storage
$(".saveBtn").click(function (e) {
  e.preventDefault();

  var scheduleobject = {
    schedule: $(this).siblings(".description").val(),
    time: $(this).parent().attr("id"),
  };

  var storedSchedule = [];
  storedSchedule = JSON.parse(localStorage.getItem("scheduleobject")) || [];
  storedSchedule.push(scheduleobject);
  localStorage.setItem("scheduleobject", JSON.stringify(storedSchedule));
});
//Load the scedule data from local storage
function LoadSchedule() {
  var schedules = localStorage.getItem("scheduleobject");
  if (schedules) {
    schedules = JSON.parse(schedules);
  } else {
    schedules = [];
  }

  for (var i = 0; i < schedules.length; i++) {
    if (schedules[i].time == "hour-9") {
      document.getElementById("description_hr9").innerHTML =
        schedules[i].schedule;
    } else if (schedules[i].time == "hour-10") {
      document.getElementById("description_hr10").innerHTML =
        schedules[i].schedule;
    } else if (schedules[i].time == "hour-11") {
      document.getElementById("description_hr11").innerHTML =
        schedules[i].schedule;
    } else if (schedules[i].time == "hour-12") {
      document.getElementById("description_hr12").innerHTML =
        schedules[i].schedule;
    } else if (schedules[i].time == "hour-13") {
      document.getElementById("description_hr13").innerHTML =
        schedules[i].schedule;
    } else if (schedules[i].time == "hour-14") {
      document.getElementById("description_hr14").innerHTML =
        schedules[i].schedule;
    } else if (schedules[i].time == "hour-15") {
      document.getElementById("description_hr15").innerHTML =
        schedules[i].schedule;
    } else if (schedules[i].time == "hour-16") {
      document.getElementById("description_hr16").innerHTML =
        schedules[i].schedule;
    } else if (schedules[i].time == "hour-17") {
      document.getElementById("description_hr17").innerHTML =
        schedules[i].schedule;
    }
  }
}
displayTime();
ColorCalender();
LoadSchedule();
