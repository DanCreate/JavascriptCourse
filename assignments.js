/*const country = "Costa Rica";
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

}


if(language == 'English' && population< 50000000 && isIsland !== false)
{
    console.log('You should live in Costa Rica');

}
else
{

    console.log('Costa Rica does not meet your criteria');
}

/*language = prompt('Choose a language');

switch (language){

case 'chinese': 
case 'mandarin': 
console.log('MOST number of native speakers!');
break;

case 'spanish': 
console.log('2nd place in number of native speakers');
break;

case 'english': 
console.log('3rd place');
break;

case 'hindi': 
console.log('Number 4');
break;

case 'arabic': 
console.log('5th most spoken language');
break;

default:
console.log('Great language too :D');


}

let popuTernary = population >= 33000000 ? "Costa Rica's population is above average" : "Costa Rica's population is below average";
console.log(popuTernary);*/

function describeCountry(country, population, capitalCity)

{
    return console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);

}

describeCountry('Morocco', 10000000, 'Test1');
describeCountry('Sri Lanka', 36000000, 'Test2');
describeCountry('Costa Rica', 50000000, 'San Jose');