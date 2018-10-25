/**
 * RADIO INPUT
 * submit button event handler
 * when submit is pressed, get radio input value
 * store radio input in an object
 * compare the chosen values to the correct values
 * display correct and incorrect answers with results
 * 
*/

















function submitAnswer() {




  console.log(radios);

  for (var i = 0; i < 4; i++) {
    var radios = $('input[name=choice]:checked', "#myForm" + (i + 1)).val();
    console.log(radios);
  }

  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("seconds").innerHTML = seconds + "s";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("seconds").innerHTML = "EXPIRED";
    }
  }, 1000);