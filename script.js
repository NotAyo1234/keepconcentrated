var audio = document.getElementById("grandfather-clock-ticking");
audio.loop = true;
audio.play();

const countdown = document.getElementById("countdown");

// Set the date we're counting down to
const countDownDate = new Date("April 1, 2023 00:00:00 GMT+0100").getTime();

// Update the countdown every second
const x = setInterval(() => {

  // Get the current date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
})
