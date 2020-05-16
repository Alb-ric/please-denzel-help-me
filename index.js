// Albéric Dufaure
const fetch = require("node-fetch")
const fs = require("fs")
// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = "please denzel, help me"
// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = "Denzel Washington"
var inspirational = "Is " + actor + " an inspirationnal actor?"

// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
var family = {
  married: 1983,
  presidentOfTheUnitedStates: false,
  children: ["John David", "Katia", "Olivia", "Malcom"],
}
// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  name: "Fences",
  year: "2010",
}
stage.name = "A Raisin in the Sun"
stage.year = "2014"
// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  movie: "glory",
}
awards["movie"] = "Training Day"
// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)
var earlywork = {
  "Carbon Copy": 1981,
  "A Soldier Story": 1984,
  "Power ": 1986,
  "Cry Freedom": 1987,
  "For Queen and Country": 1988,
}
// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = [
  "we do",
  "what we have to do",
  "in order to do",
  "what we want to do",
]
for (x in debaters) {
  debaters[x] = debaters[x].toUpperCase()
}
// Q8. Using this array.
// Do the following 5 steps
const directors = ["spikelee", "ridleyscott", "zemeckis"]

// 1. add "tonyscott" value to the end of `directors` array
directors.push("tonyscott")
// 2. remove "spikelee" value and store it in a variable called firstDirector
firstDirector = directors.shift()
// 3. add "himself" value to the start of `directors` array
directors.unshift("himself")
// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
secondDirector = directors.splice(1, 1)
// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
var thirdDirector = directors[1]
// Q9. Write the function `duplicate` that return the expected result
function duplicate(array) {
  for (let i in array) {
    array.push(array[i])
  }
  return array
}

console.log(
  duplicate([
    "Happily",
    "Ever",
    "After",
    "Fairy",
    "Tales",
    "for",
    "Every",
    "Child",
  ])
)
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']

// Q10. Refactor the current ES5-style function `police` in ES6-style.
/*const police = function (names) {
  const results = []

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + "I am the police")
  }
  return results
}*/
const quotes = [
  "You will never see the light of... ",
  "I run shit around here ",
  "King Kong aint got shit on me ",
]

const police = (names) => {
  const results = []
  names.forEach((element) => {
    element = element + "I am the police"
    results.push(element)
  })
  return results
}

console.log(police(quotes))

// ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];

// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?

// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// It returns the main information about the person with the id 6616, which is Zach Shirey.

// Q14. Refactor the following codebase with a promise notation
/*
fs.readFile("test.txt", function (err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})*/
const readFile = new Promise((resolve, reject) => {
  fs.readFile("test.txt", function (err, data) {
    if (err) {
      // handle the error, the return is important here
      // so execution stops here
      return console.log(err)
    }
    // use the data object
    console.log(data)
  })
})

// Q15. Refactor the following codebase with async/await notation
/*
fetch("http://api.tvmaze.com/search/people?q=denzel+washington")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    const { person } = data[0]
    const { id } = person

    return fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`)
  })
  .then((response) => {
    return response.json()
  })
  .then(console.log)
*/
async function fetchPerson() {
  var data = await (
    await fetch("http://api.tvmaze.com/search/people?q=denzel+washington")
  ).json()

  const { person } = data[0]
  const { id } = person

  var response = await (
    await fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`)
  ).json()
  console.log(response)
}

fetchPerson()

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)

//1-RAPIDAPI: I used this website for my chatbot project and it made me want to learn more about different APIs because the UI is so well maid.
// All the information about how to implement the API in the language you want, examples of responses and the keys you need to use are displayed on a single page.
// In addition to that, on the left you can see all the endpoints available for the API you are checking and click on them to see their description and implementation, etc...

//2-BANDCAMP: As a music lover, this platform really motivates me to discover new artists. You can see in real time the albums that are being bought all over the world
// with the price paid and the country from wich the person purchased it.
// By clicking on it you can listen to the album and see all you have to know about the artist and comments from fans.

//3-OPENCLASSROOM: I used a lot this educational platform during my years of studying IT because the courses are well-explained but also because of its tracking system
// that allows the user to keep track of where he left in his reading and check boxes when he finished a chapter, as well as seeing his progression.
// It is also easy to copy paste code, comment to ask questions and there is quizzes to check your knowledge, all of this interested me into learning more.

// Q17. Describe an ESILV project that you worked on that you’re proud of?

// I will describe the advanced object oriented programming project I did last year.
// The goal of the project was to keep track of gifts made to an association
// I used the MVC architecture and I had to make a lot of different classes for the different types of gifts.
// I am proud of this project because I had to use all the concepts I learned in C#.
// I used heritage, abstract classes, graphic interface, generic collections and design patterns.
// I invested a lot of time for this project and to see all the classes and their interactions with each other,
// I did a UML diagram, which made me proud because I could visualize all the architecture of my application,
// which was satisfying because I could easily show to someone all the work I did.

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?

// I am not so proud of my Web Application project because I did not invested enough time to complete it.
// I had not thought of all the time I would need to learn React and Node js before so I couldn't finish the project.
// During this project I realized that there is a lot of cool stuff that you can do with node js, so much that I should have
// worked I all the time I had because it felt like there were always things to be improved.
// I was frustrated that I had to rush this project because I underestimated the time I would need to learn these tools.
// I sometimes had to copy paste code I didn't understand, which is a bad idea because it caused problems afterwards
// and did not contributed to make me learn what I was doing.

// Q19. What are some things you like about the developer tools you use?
// I like the autocompletion features of VS code because it saves a lot of time.
// I also like the npm package manager because it makes it really easy to install tools for Node js.
// The console you can see if you press F12 in Chrome is also really handy because you can see the value of the objects
// you created in React for example.

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?
