const country = "Costa Rica";
const continent = "Central America";
let population = 5000000;
const isIsland = false;
let language = 'Spanish';
questionNumber1 = population / 2;
const descriptionV1  = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language; 
const descriptionV2  = `${country} is located in ${continent}, and its ${population} people speak ${language}`;

console.log("Country Selected: "+ country , "\nIt is located in: "+ continent, "\nIts population is: "+population );
console.log(typeof isIsland, typeof population, typeof country, typeof language);
console.log(questionNumber1);
questionNumber1++;
console.log(questionNumber1);
let finlandPopulation = 6000000;
if (finlandPopulation > population) {
    console.log("Finland has more population")
}
else
{
    console.log("Costa Rica has more population")

}
console.log(descriptionV1);
console.log(descriptionV2);

//let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

/*if (numNeighbours === 1) {
    console.log('Only one neighbour');
} else if (numNeighbours > 1) {
    console.log('More than one neighbour');
} else
{
    console.log('No neighbours');

}*/


if(language == 'English' && population< 50000000 && isIsland !== false)
{
    console.log('You should live in Costa Rica');

}
else
{

    console.log('Costa Rica does not meet your criteria');
}
