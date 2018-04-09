# JS Day 1 Homework

Go through each sample code and work out what the output will be and explain what happened.

### Episode 1

```js
const name = 'Keith';

const printName = function () {
  console.log(`My name is ${ name }`);
}

printName();
```

### Episode 2

```js
const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());
```

### Episode 3

```js
const myAnimals = ['Chickens', 'Cats', 'Rabbits'];

const listAnimals = function () {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];

  for (const i = 0; i < myAnimals.length; i++) {
    console.log(`${ i }: ${ myAnimals[i] }`);
  }
}

listAnimals();
```

### Episode 4

```js
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
```

### Episode 5

```js
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
```

### Episode 6

```js
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
```

### Episode 7 - Make up your own episode(s)!

Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
