const Person = {
      name:"Sai"
};

const secondPerson = Person;
const secondPerson2 = {
      ...Person
};

Person.name = "Max";
console.log(secondPerson);
console.log(secondPerson2);

// array and objects are reference types. (points to the reference of object)

const number = 1;
const num2 = number;
console.log(num2);

// number stings and boolean are primitive type 