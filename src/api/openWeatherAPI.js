import axios from "axios";

const geolocation = JSON.parse(localStorage.getItem("geolocation"));

const openWeatherAPI = {
  endpoint: "https://api.openweathermap.org",
  apiKey: "87cf27700817ed4e92adafa080b190b6",

  async fetchCurrentWeather(query) {
    const queryString = `${this.endpoint}/data/2.5/weather?q=${query}&appid=${this.apiKey}&units=metric`;
    const { data } = await axios.get(queryString);
    return data;
  },

  async fetchHourlyForecast({ lat, lon }) {
    const queryString = `${this.endpoint}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,minutely&appid=${this.apiKey}&units=metric`;
    const { data } = await axios.get(queryString);
    return data;
  },

  async fetchCurrentWeatherByGeolocation() {
    const queryString = `${this.endpoint}/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=${this.apiKey}&units=metric`;
    const { data } = await axios.get(queryString);
    return data;
  },
};

export default openWeatherAPI;
