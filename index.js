// shuffle Female & Male rosters up to eight players
// create waitlist for last to register if more than 8

var females = [{name: 'Alice', gender: 'F'},
                 {name: 'Lynda', gender: 'F'},
                 {name: 'Carol', gender: 'F'},
                 {name: 'Kelly', gender: 'F'},
                 {name: 'Dorothy', gender: 'F'},
                 {name: 'Beth', gender: 'F'},
                 {name: 'Jane', gender: 'F'},
                 {name: 'Barb', gender: 'F'},
                 {name: 'Molly', gender: 'F'},
                 {name: 'Joan', gender: 'F'}];

var males  =  [{name: 'John', gender: 'M'},
                 {name: 'Kevin', gender: 'M'},
                 {name: 'Dave', gender: 'M'},
                 {name: 'Rocky', gender: 'M'},
                 {name: 'Robert', gender: 'M'},
                 {name: 'Ben', gender: 'M'},
                 {name: 'Jim', gender: 'M'},
                 {name: 'Brian', gender: 'M'},
                 {name: 'Jon', gender: 'M'},
                 {name: 'Kelly', gender: 'M'}];

                 // pop more than 8 to waitlists
                 var malesWaiting = [];
                 var i = 0;
                 while ((i < males.length) & (males.length > 8)) {
                     i++;
                     malesWaiting.push(males.pop());
                 }

                 var femalesWaiting = [];
                 var i = 0;
                 while ((i < females.length) & (females.length > 8)) {
                     i++;
                     femalesWaiting.push(females.pop());
                 }

                 var shuffledFemales = shuffle(females);
                 // console.log(shuffledFemales);
                 var shuffledMales = shuffle(males);
                 // console.log(shuffledMales);

                 // a Fisher-Yates-Durstenfeld shuffle:
                 function shuffle(sourceArray) {
                     for (var i = 0; i < sourceArray.length - 1; i++) {
                         var j = i + Math.floor(Math.random() * (sourceArray.length - i));

                         var temp = sourceArray[j];
                         sourceArray[j] = sourceArray[i];
                         sourceArray[i] = temp;
                     }
                     // console.log("\n" + sourceArray);
                     return sourceArray;
                 }

var players = shuffledFemales.concat(shuffledMales);
// var players = females.concat(males);
// console.log(players);

var fnames = players.filter(getFemales);

function getFemales(item, index) {
  if(item.gender == 'F'){
    return index + ':' + item.name;
  }
}
fnames;

var mnames = players.filter(getMales);

function getMales(item, index) {
  if(item.gender == 'M'){
    return index + ':' + item.name;
  }
}
mnames;

const signupcnt = fnames.length + mnames.length;
const ladiescnt = fnames.length;
const mencnt = mnames.length;

console.log(signupcnt + ' registered: ' +  ladiescnt + ' ladies & '  + mencnt + ' men');
console.log(femalesWaiting.length + malesWaiting.length + ' Waitlisted');
console.log('Waitliest:');
console.log(femalesWaiting);
console.log(malesWaiting);

// need to know whether there are more F or M
// create waitlists, if conditions are met
function gendersEqual (ladiescnt, mencnt){
  if((ladiescnt == mencnt) && (signupcnt % 4 == 0))
     return 'mixed doubles roster OK';
}

const teams = signupcnt / 2;
const courts = teams / 2;

console.log('Number of Teams:  ' + teams);
console.log('Number of courts: ' + courts);
console.log("\nMixed Doubles randomized pairings . . .");
console.log('Court 1:');
console.log(Object.entries(fnames).slice(0,1).map(entry => entry[1]));
console.log(Object.entries(mnames).slice(0,1).map(entry => entry[1]));
console.log('VS');
console.log(Object.entries(fnames).slice(1,2).map(entry => entry[1]));
console.log(Object.entries(mnames).slice(1,2).map(entry => entry[1]));

console.log('\nCourt 2:');
console.log(Object.entries(fnames).slice(2,3).map(entry => entry[1]));
console.log(Object.entries(mnames).slice(2,3).map(entry => entry[1]));
console.log('VS');
console.log(Object.entries(fnames).slice(3,4).map(entry => entry[1]));
console.log(Object.entries(mnames).slice(3,4).map(entry => entry[1]));

console.log('\nCourt 3:');
console.log(Object.entries(fnames).slice(4,5).map(entry => entry[1]));
console.log(Object.entries(mnames).slice(4,5).map(entry => entry[1]));
console.log('VS');
console.log(Object.entries(fnames).slice(5,6).map(entry => entry[1]));
console.log(Object.entries(mnames).slice(5,6).map(entry => entry[1]));

console.log('\nCourt 4:');
console.log(Object.entries(fnames).slice(6,7).map(entry => entry[1]));
console.log(Object.entries(mnames).slice(6,7).map(entry => entry[1]));
console.log('VS');
console.log(Object.entries(fnames).slice(7,8).map(entry => entry[1]));
console.log(Object.entries(mnames).slice(7,8).map(entry => entry[1]));
