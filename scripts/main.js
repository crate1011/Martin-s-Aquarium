import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import { fishList } from './Fishlist.js'


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishHTMLElement = document.querySelector("#fishlist")


fishHTMLElement.innerHTML = fishList()




import { getLocation } from './database.js'

const alllocations = getLocation()

for (const location of alllocations) {
    console.log(location)
}

// Import the FishList function from the correct module
import { locationList } from './Fishlist.js'


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const locationHTMLElement = document.querySelector("#locationList")


locationHTMLElement.innerHTML = locationList()