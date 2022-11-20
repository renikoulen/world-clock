function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#Los-Angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = moment
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = moment
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  // Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    berlinDateElement.innerHTML = moment()
      .tz("Europe/Berlin")
      .format("MMMM Do, YYYY");
    berlinTimeElement.innerHTML = moment
      .tz("Europe/Berlin")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  // Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    johannesburgDateElement.innerHTML = moment()
      .tz("Africa/Johannesburg")
      .format("MMMM Do, YYYY");
    johannesburgTimeElement.innerHTML = moment
      .tz("Africa/Johannesburg")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
 <div class="city">
 <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">All cities</a>
 `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
