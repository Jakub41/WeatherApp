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
      // Getting coordinates we accessed long/lat
      long = position.coords.longitude;
      lat = position.coords.latitude;
      // CORS fix
      const proxy = `https://cors-anywhere.herokuapp.com/`;
      // API -> we pass as @params 1st lat 2sd long
      const api = `${proxy}https://api.darksky.net/forecast/6ff3bc141da2e9d546565b4cf31812c6/${lat},${long}`;
      
      // Calling the async function
      // We need to fetch the data from API
      // We use async function passing our API
      const getData = async () => {
          // We fetch and await the response
          const response = await fetch(api);
          // We wait the results in a JSON OBJ
          const data = await response.json();
          // Short hand to get the data -> temperature & summary
          const {temperature, summary} = data.currently;


      }   
    });
  } else {
    // We show a message if the geolocation Doesn’t Success
    h1.textContent =
      "Please check if your browser has permission to lactation or support of it";
  }
};
