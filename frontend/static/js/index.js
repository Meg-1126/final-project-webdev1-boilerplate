import { getCountries } from './countries.js'

export const countries = getCountries();
export let filteredCountry = [];

export let inputRegion;

//Add all the addEventListener inside this 
window.addEventListener('DOMContentLoaded', (event) => {

  //Switch screen mode (light/dark)
  function switchScreenMode() {
    let screen = document.body;
    let toggleBtn = document.getElementById("switch");

    toggleBtn.addEventListener("click", function () {
      screen.classList.toggle("dark");
    });

  }
  switchScreenMode();

  document.getElementById("region").addEventListener('click', (event) => {
    inputRegion = document.getElementById("region").value;
    filteredCountry = filterCountry();
  });

 
  function filterCountry() {
    filteredCountry = [];
    for (let i = 0; i < countries.length; i++) {
      if (inputRegion !== null && inputRegion === countries[i].region) {
        filteredCountry.push(countries[i]);
      } else if (inputRegion == null || inputRegion == undefined || inputRegion == 'All') {
        filteredCountry.push(countries[i]);
      }
    }

    return filteredCountry;
  }

  console.log('teste', filteredCountry);
});