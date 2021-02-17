let createDate = new Date("sep 8, 2021 12:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let diff = createDate - now;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((diff % (1000 * 60)) / 1000);
  document.querySelector(
    ".Demo"
  ).innerHTML = `${days}days : ${hours}hrs : ${mins}mins : ${sec}s`;
}, 1000);
