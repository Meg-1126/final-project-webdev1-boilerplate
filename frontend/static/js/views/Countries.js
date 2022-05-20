import AbstractView from "./AbstractView.js";
import { countries, filteredCountry } from "../index.js";

let filter = filteredCountry;

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        console.log(this.params.id);
        const div = document.createElement("div");
        const container = document.createElement("div");
        div.innerHTML = `
        <div class="search">
            <input type="text" id="countrySearch" placeholder="Search for a country...">
            <select name="region" id="region">
                <option value="All">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>  
        `

        for (let i = 0; i < filter.length; i++) {
            const card = document.createElement("div");
            card.innerHTML = `
                <div class="cards-info">
                    <a href="/countries/`+ filter[i].cca3 + `">
                    <div class="cards-flag">
                        <img src="`+ filter[i].flags.png + `" width="250" height="150">
                    </div>
                    <div class="cards-text">
                        <h3>`+ filter[i].name.common + `</h3>
                        <p>Population: `+ filter[i].population + `</p> 
                        <p>Region: `+ filter[i].region + `</p>
                        <p>Capital: `+ filter[i].capital + `</p>
                    </div>
                    </a>
                </div>
                `
            container.appendChild(card);
        }

        // for (let i = 0; i < countries.length; i++) {
        //         const card = document.createElement("div");
        //         card.innerHTML = `
        //                 <div class="cards-info">
        //                     <a href="/countries/`+ countries[i].cca3 + `">
        //                         <div class="cards-flag">
        //                             <img src="`+ countries[i].flags.png + `" width="250" height="150">
        //                         </div>
        //                         <div class="cards-text">
        //                             <h3>`+ countries[i].name.common + `</h3>
        //                             <p>Population: `+ countries[i].population + `</p> 
        //                             <p>Region: `+ countries[i].region + `</p>
        //                             <p>Capital: `+ countries[i].capital + `</p>
        //                         </div>
        //                  </a>
        //             </div>
        //             `
        //         container.appendChild(card);
        // }

        return `
            <div id="container">
                ${div.innerHTML}
                ${container.innerHTML}
                </div>
            </div>
            `;
    }
}