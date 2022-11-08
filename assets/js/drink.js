// Linking the id's of these div's to the chosen variables
var cocktailButton = document.getElementById("cocktail-button");
var beerButton = document.getElementById("beer-button");

var cocktailSearchHistory = [];
var beerSearchHistory = [];







 
// Find a random cocktail
function getRandomCocktail () {

    var findRandomCocktail = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

    fetch(findRandomCocktail)
     .then(function (response) {
        return response.json();
     })
     .then (function (randomCocktailData) {
        // check that it has found a random cocktail
        console.log(randomCocktailData)

        // Start the function to show our random cocktail on the page
        createRandomCocktail(randomCocktailData);
     })}


     // Find a random beer
function getRandomBeer () {    
    
     var findRandomBeer = `https://uk.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=beers&json=true`


     fetch(findRandomBeer)
     .then(function (response) {
        return response.json();
     })
     .then (function (randomBeerData) {
        // check that it has found a random cocktail
        console.log(randomBeerData)

        //Start the function to show our random cocktail on the page
        createRandomBeer(randomBeerData);
 })}













 // Finds the random beer name and img
 function createRandomBeer (randomBeerData) {




    
    
    // Grabs the name and sets its var
    var beerName = `${}`
    console.log(beerName)

    // Grabs the picture and sets its var
    var beerPic = `${}`
    console.log(beerPic)

    createBeerDiv (beerName, beerPic);
}

// This function will create the div to show the data we have got
function createBeerDiv (name, picture) {

    // Grabs the div id=beer-creation and clears it, ready to add new data inside
    var beerCreation = document.getElementById("beer-creation")
    beerCreation.innerHTML = "";

    var newBeer = document.createElement("div");
    newBeer.classList.add("new-beer")
    newBeer.innerHTML = 

    `<div>${name}</div>
    <img src=${picture} width="600px" height="600px">`;

    beerCreation.appendChild(newBeer); 
}

 










 ///console.log(beers);
// create a random number between 0 and the number of beers
//var randomBeer = Math.floor(Math.random() * beers.length);
//var beer = beers.products[randomBeer];
//console.log('You have chosen ' + beer.product_name);
//for (var i = 0; i < beers.products.length; i++) {
    //var beer = beers.products[i];
   // console.log(beer.product_name);
    //console.log(beer.product_name);
//}









// Finds the random cocktail name and img
function createRandomCocktail (randomCocktailData) {
    
    // Grabs the name and sets its var
    var cocktailName = `${randomCocktailData.drinks[0].strDrink}`
    console.log(cocktailName)

    // Grabs the picture and sets its var
    var cocktailPic = `${randomCocktailData.drinks[0].strDrinkThumb}`
    console.log(cocktailPic)

    createCocktailDiv (cocktailName, cocktailPic);
}

// This function will create the div to show the data we have got
function createCocktailDiv (name, picture) {

    // Grabs the div id=cocktail-creation and clears it, ready to add new data inside
    var cocktailCreation = document.getElementById("cocktail-creation")
    cocktailCreation.innerHTML = "";

    var newCocktail = document.createElement("div");
    newCocktail.classList.add("new-cocktail")
    newCocktail.innerHTML = 

    `<div> ${name}  </div>
    <img src=${picture} width="600px" height="600px">`;

    cocktailCreation.appendChild(newCocktail); 

}









// Starts up creating the cocktail and beer random history to be displayed
//startCocktailRandomHistory ();
//startBeerRandomHistory ();

// Adding an event listener so that when the id'd button is pressed, the specific function starts:
cocktailButton.addEventListener("click", getRandomCocktail) 
beerButton.addEventListener("click", getRandomBeer) 


// console.log what button they have pressed

// console log later the title of the beer from the api and add it into the beer/cock search history array

// need the entire gets search history and present functions once the main part is done