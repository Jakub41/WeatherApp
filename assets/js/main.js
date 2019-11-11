/**
 *
 * Weather APP
 *
 * We get weather info from
 * @link https://darksky.net/forecast/40.7127,-74.0059/us12/en
 *
 * @param {float} latitude, longitude
 *
 * ! To be able to use it you need to allow location access
 * ! in your browser when asked
 */

// We need our location longitude/latitude on page load
window.onload = () => {
  // Coordinates variables
  let long;
  let lat;

  // We check if geolocation exist on browser with a JS method
  // @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  if (navigator.geolocation) {
    // Getting current position
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      // Getting coordinates we accessed long/lat
      long = position.coords.longitude;
      lat = position.coords.latitude;

      // API
      const api = `https://api.darksky.net/forecast/6ff3bc141da2e9d546565b4cf31812c6/37.8267,-122.4233`;
    });
  } else {
    h1.textContent =
      "Please check if your browser has permission to lactation or support of it";
  }
};
