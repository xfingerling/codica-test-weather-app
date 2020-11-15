export function allowLocation(location) {
  localStorage.removeItem("geolocation");

  const {
    coords: { latitude, longitude },
  } = location;
  const geolocation = {
    acces: true,
    latitude: +latitude.toFixed(2),
    longitude: +longitude.toFixed(2),
  };
  return localStorage.setItem("geolocation", JSON.stringify(geolocation));
}
export function denyLocation() {
  localStorage.removeItem("geolocation");

  const geolocation = {
    acces: false,
  };
  return localStorage.setItem("geolocation", JSON.stringify(geolocation));
}
