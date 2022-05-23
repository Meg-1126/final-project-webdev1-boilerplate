import AbstractView from "./AbstractView.js";
import { countries } from "../index.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {
        console.log(this.params.id);
        let country = this.params.id;
        
        const container = document.createElement("div");

        for (let i = 0; i < countries.length; i++) {
            if (country == countries[i].cca3) {
                container.innerHTML = `
                    <div class="country-info">
                        <div class="country-flag">
                            <img src="`+ countries[i].flags.png + `">
                        </div>
                        <div class="country-data">
                            <h3>`+ countries[i].name.common + `</h3><br>
                            <p>Native Name: `+ countries[i].nativeName + `</p>                            
                            <p>Population: `+ countries[i].population + `</p> 
                            <p>Region: `+ countries[i].region + `</p>
                            <p>Sub Region: `+ countries[i].subregion+ `</p>
                            <p>Capital: `+ countries[i].capital + `</p>
                            <p>Top Level Domain: `+ countries[i].topLevelDomain + `</p>
                            <p>Currencies: `+ countries[i].currencies + `</p>
                            <p>Languages: `+ countries[i].languages  + `</p>
                            <p>Border Countries: `+ countries[i].borders + `</p>
                        </div>
                    </div>
                        `

            }
            

            

        }
        
        return `
            <div class="country-page">
                <div>
                    <button onclick="history.back()">Go Back</button>
                </div>
                <div>
                    ${container.innerHTML}
                </div>
            </div>
            
        `;
    }
}