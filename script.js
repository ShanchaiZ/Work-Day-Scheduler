//1. Current date added on top of the project planner using moment.js.
var currentTime= moment().format('MMMM Do YYYY');
$("#currentDay").text(currentTime);

//2.Created variables for timeblocks for comparison.

var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

/*3. If-else function created to verify the relationship between current timeblock in relation to current time. 
    If a timeblock hour is strictly equal to current time (now), then it is marked as present = red in style.css. 
    If a timeblock is less than current time (now) then it is marked as past = marked as grey in style.css.
    If a timeblock time is greater than current time (now), then the timeblock is marked as green in style.css.
    
This logic was performed for every timeblock and was placed in a "For each" function*/

$.each(timeBlock, function (i, hour) {
    var hourId = parseInt($(this).attr("id"));
    if (hourId === now) {
      $(this).next().addClass("present");
    } else if (hourId < now) {
      $(this).next().addClass("past");
    } else if (hourId > now) {
      $(this).next().addClass("future");
    }
  });


//4. We want create a function that "sets" our calendar items written in the "textarea" of the HTML by "clicking" on the save to our "local storage".

$(".saveBtn").on("click", function (event) {
    var calendarItem =
      event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.attributes[0].value, calendarItem);
  });

/* Explanation of code above: variable calendarItem is a local variable that identifies: 
        The event = "placeholder" + "Add events here"
        parentElement = "textarea"
        children = empty field (but can be filled by the user), 
    and saves the user input in localstorage as a setItem as a Key-Value pair of time and user inputed event.
*/

/* 5. Now we want the repopulate what we have stored in the local storage once the page refreshes.

Explanation of code below:
"$(document).ready(function () {}" this section of code means whatever code that is written inside the curly braces will run once the page DOM is ready to execute JavaScript code.

Then it begins the if-else statement of:
  IF localstorage id of [9am] field is NOT empty (indicated by !==null) AND does NOT have an undefined value (indicated by !==undefined), it will take the locally stored user input and ADD IT TO (append) the inner HTML text of the textarea id. ELSE, it will leave a blank string and continue down to the next row until the end of all rows.

*/
  $(document).ready(function () {
    if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
      var nineAm = $("<p>" + localStorage["9am"] + "</p>");
      $("#nineAm").append(nineAm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
      var tenAm = $("<p>" + localStorage["10am"] + "</p>");
      $("#tenAm").append(tenAm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
      var elevenAm = $("<p>" + localStorage["11am"] + "</p>");
      $("#elevenAm").append(elevenAm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
      var twelvePm = $("<p>" + localStorage["12pm"] + "</p>");
      $("#twelvePm").append(twelvePm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
      var onePm = $("<p>" + localStorage["1pm"] + "</p>");
      $("#onePm").append(onePm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
      var twoPm = $("<p>" + localStorage["2pm"] + "</p>");
      $("#twoPm").append(twoPm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
      var threePm = $("<p>" + localStorage["3pm"] + "</p>");
      $("#threePm").append(threePm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
      var fourPm = $("<p>" + localStorage["4pm"] + "</p>");
      $("#fourPm").append(fourPm[0].innerText);
    } else {
      ("");
    }
    if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
      var fivePm = $("<p>" + localStorage["5pm"] + "</p>");
      $("#fivePm").append(fivePm[0].innerText);
    } else {
      ("");
    }
  });


