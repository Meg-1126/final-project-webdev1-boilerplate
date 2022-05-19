import AbstractView from "./AbstractView.js";
import { countries } from "../index.js";

export default class extends AbstractView{
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
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>      
        `
        
        
        for (let i = 0; i < countries.length; i++){
            const card = document.createElement("div");
            card.innerHTML = `
            <div class="cards">
                <div class="cards-info">
                    <a href="/countries/`+countries[i].cca3+`">
                        <div class="cards-flag">
                            <img src="`+countries[i].flags.png+`" width="250" height="150">
                        </div>
                        <div class="cards-text">
                            <h3>`+countries[i].name.common+`</h3>
                            <p>Population: `+countries[i].population+`</p> 
                            <p>Region: `+countries[i].region+`</p>
                            <p>Capital: `+countries[i].capital+`</p>
                        </div>
                    </a>
                </div>
            </div>
        `
        container.appendChild(card);
        }
        
        return `
            <div id="container">
                ${div.innerHTML}
                ${container.innerHTML}
            </div>
            `;

    }
}