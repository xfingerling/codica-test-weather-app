export const setLocalStorage = (key, data) => {
  const cities = JSON.parse(localStorage.getItem(key)) || [];

  if (cities.includes(data)) return;

  cities.push(data);

  localStorage.setItem(key, JSON.stringify(cities));
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const removeFromLocalStorage = (key, data) => {
  const cities = JSON.parse(localStorage.getItem(key)) || [];

  if (cities.includes(data)) {
    const index = cities.indexOf(data);
    cities.splice(index, 1);

    localStorage.setItem(key, JSON.stringify(cities));
  }
};
