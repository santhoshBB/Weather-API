$("#flex")
  .find(".input")
  .on("keyup", () => {
    const city = $(".input").val();
    console.log(city);
    getInfo(city);
  });

let getInfo = (city) => {
  const apiKey = "5a2163f7252d57126b39146901f497e7";

  const weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey;
  $.ajax(weatherURL, {
    type: "GET",
    success: (data) => {
      console.log(data);

      $("#flex").find("h2").text(data.name);
      let temp = Math.floor(data.main.temp - 273);
      $("#flex")
        .find("h1")
        .text(temp + "°c");
    },
    error: (err) => {
      console.log(err);
    },
  });
};
