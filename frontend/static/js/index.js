import { getCountries } from './countries.js'

export const countries = getCountries();
let filteredCountry = [];

let inputRegion;

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
    createCountry(filteredCountry);
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


  function createCountry(countries) {
    const container = document.querySelector("#container");
    container.innerHTML = "";
      for (let i = 0; i < countries.length; i++) {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="cards-info">
                <a href="/countries/`+ countries[i].cca3 + `">
                <div class="cards-flag">
                    <img src="`+ countries[i].flags.png + `" width="250" height="150">
                </div>
                <div class="cards-text">
                    <h3>`+ countries[i].name.common + `</h3>
                    <p>Population: `+ countries[i].population + `</p> 
                    <p>Region: `+ countries[i].region + `</p>
                    <p>Capital: `+ countries[i].capital + `</p>
                </div>
                </a>
            </div>
            `
        container.appendChild(card);
    }


  }


});