/*
Write a function describeAnimal that takes an Animal object as a parameter and
returns a description string. The Animal type is a discriminated union that can
be either a dog or a bird.

You will need to provide an implementation of the Animal type that uses
discriminated unions to handle the different cases. For dogs, it should return
"name is a age year(s) old dog."; for birds, it should return "name is a bird
with a wingspan cm wingspan."
*/
type Bird = {
  kind: "bird";
  name: string;
  wingspan: number;
}

type Dog = {
  kind: "dog";
  name: string;
  age: number;
}

type Animal = 
  | Dog
  | Bird;

const dog: Dog = {
  kind: "dog",
  name: "Tommy",
  age: 4,
}

const bird: Bird = {
  kind: "bird",
  name: "Polly",
  wingspan: 15,
}

function describeAnimal(animal: Animal): string {
  let output: string;
  switch (animal.kind) {
    case "dog":
      output =  `${animal.name} is ${animal.age} year(s) old dog.`;
      break;
    case "bird":
      output = `${animal.name} is a bird with a ${animal.wingspan}cm wingspan.`;
      break;
  }

  return output;
}

console.log(describeAnimal(dog));
console.log(describeAnimal(bird));

