/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "steve",
            food: "crustaceans",
            length: 3,
            species: "clown fish",
            location: "sea hawkins",
            image: "clown_fish.webp"
        },
        {
            name: "dustin",
            food: "barnacles",
            length: 10,
            species: "dog fish",
            location: "white fish bay",
            image: "dogfish.jpeg"
        },
        {
            name: "el",
            food: "waffles",
            length: 11,
            species: "electric eel",
            location: "the lab",
            image: "electric_eel.webp"
        },
        {
            name: "nancy",
            food: "minnows",
            length: 2,
            species: "lion fish",
            location: "barb reef",
            image: "lion_fish.webp"
        },
        {
            name: "will",
            food: "sea slugs",
            length: 7,
            species: "cuddle fish",
            location: "sandyana",
            image: "cuddle_fish.png"
        },
        {
            name: "hopper",
            food: "demagorgans",
            length: 35,
            species: "shark",
            location: "sundering seas",
            image: "bull_shark.webp"
        },
        {
            name: "bob",
            food: "potatoes",
            length: 9,
            species: "newby",
            location: "bay of belfalas",
            image: "sam_fish.jpeg"
        }
    ],
    locations: [
        {
            image: "reef.jpeg",
            location: "P. SHERMAN 42 Wallaby Way, Sidney",
            fishFound: "clown fish"
        },
        {
            image: "percy_priest.jpeg",
            location: "Percy Priest",
            fishFound: "newby"
        },
        {
            image: "shallows.jpeg",
            location: "The Shallows",
            fishFound: "cuddle fish"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getLocation = () => {
    return database.locations.map(location => ({...location}))
}