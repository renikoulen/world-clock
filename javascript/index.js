setInterval(function () {
  //Los Angeles
  let losAngelesElement = document.querySelector("#Los-Angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = moment
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = moment
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");

  // Berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  berlinDateElement.innerHTML = moment()
    .tz("Europe/Berlin")
    .format("MMMM Do, YYYY");
  berlinTimeElement.innerHTML = moment
    .tz("Europe/Berlin")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
