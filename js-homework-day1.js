const name = 'Keith';

const printName = function () {
  console.log(`My name is ${ name }`);
}

printName();

// This will use the constant "name" in the print name function to print out the string "My name is Keith" when the function is called.

const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());

// score is being initialised inside the function as a constant and is being returned. Therefore when result is called, it will return 3, this is what is printed


const myAnimals = ['Chickens', 'Cats', 'Rabbits'];

const listAnimals = function () {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];

  for (const i = 0; i < myAnimals.length; i++) {
    console.log(`${ i }: ${ myAnimals[i] }`);
  }
}

listAnimals();

// as myAnimals is a constant, it cannot be assigned a new value. Because of this, an error will occur at line 26. If that was corrected, line 28 would also be an issue as i is a constant and then its trying to increment it, which is trying to change the value.

const suspectOne = 'Jay';
const suspectTwo = 'Val';
const suspectThree = 'Keith';
const suspectFour = 'Rick';

const allSuspects = function () {
  const suspectThree = 'Harvey';
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
}

allSuspects();
console.log(`Suspect three is: ${ suspectThree }`);

// as suspectThree is being initialised inside the function, the print out within the function will be [Jay, Val, Harvey, Rick]. That suspectThree is not visible outside the block and so Keith will be printed out by line 48

const detective = {
  name: 'Ace Ventura',
  pet: 'monkey'
};

const printName = function (detective) {
  return detective.name;
}

const detectiveInfo = function () {
  detective['name'] = 'Poirot';
  return printName(detective);
}

console.log(detectiveInfo());

// As you can still modify what is inside an object or array even if it is declared as a constant, the print out will be Poirot.

const murderer = 'rick';

const outerFunction = function () {
  const murderer = 'marc';

  const innerFunction = function () {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log(`The murderer is: ${ murderer }`);

// This will hit an error on line 75, as the constant murderer definied on line 72 is trying to be changed. Otherwise as nothing is being returned, the murderer used on line 83 will be rick
