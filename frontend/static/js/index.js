import {getCountries} from './countries.js'

export const countries = getCountries();

console.log(countries);
//Add all the addEventListener inside this 
window.addEventListener('DOMContentLoaded', (event) => {
  
  //Switch screen mode (light/dark)
  function switchScreenMode() {
    let screen = document.body;
    let toggleBtn = document.getElementById("switch");
  
    toggleBtn.addEventListener("click", function(){
    screen.classList.toggle("dark");
    });
  
  }
  switchScreenMode();

  // Search bar
  function countrySearchByName () {
    let inputCountry = document.getElementById("countrySearch"); 
    let countryName;
    let txtValue;
    let cardDiv = document.getElementsByClassName("cards");

    inputCountry.addEventListener("keyup", function() {
      let input = inputCountry.value.toUpperCase();

     for (let i = 0; i < countries.length; i++) {
       countryName = document.getElementsByClassName("country-name")[i]; 
       txtValue = countryName.textContent || countryName.innerText;
       txtValue.toUpperCase().startsWith(input) 
       ? (cardDiv[i].parentNode.style.display = "")
       : (cardDiv[i].parentNode.style.display = "none");
      }
    });
  }
 countrySearchByName();

});
