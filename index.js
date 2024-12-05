const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

currentCityTag.innerHTML = currentCity;

displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

const scrollButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const viewportHeight = window.innerHeight;

  if (scrollPosition > viewportHeight / 2) {
    scrollButton.classList = "visible";
  } else {
    scrollButton.classList = "";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollButton.addEventListener("click", scrollToTop);
