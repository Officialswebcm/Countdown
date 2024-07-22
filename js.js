
// Set the date we're counting down to
var countDownDate = new Date("Aug 3, 2024 00:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = 'Check out the new realese<br/> Spotify:<a href = "https://open.spotify.com/artist/4QhKVomgKmdbakCblIkh57?si=AQDitXkbRoyTfj_zFSRXbA">https://open.spotify.com/artist/4QhKVomgKmdbakCblIkh57?si=AQDitXkbRoyTfj_zFSRXbA</a> <br/> Youtube:<a href = "https://youtube.com/@_king_blade17_?si=yp0fVjEQ4Wl7xRtC">https://youtube.com/@_king_blade17_?si=yp0fVjEQ4Wl7xRtC</a>';
  }
}, 1000);
