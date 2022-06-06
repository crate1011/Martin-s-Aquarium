// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"


export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img  class="fish__image image--card" src="images/${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

import { getLocation } from "./database.js"


export const locationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocation()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="LocationList">'

    // Create HTNL representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="locationCard">
            <div><img  class="location__image image--card" src="images/${location.image}" /></div>
            <div class="location__spots">${location.location}</div>
            <div class="location__found">${location.fishFound}</div>

        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}