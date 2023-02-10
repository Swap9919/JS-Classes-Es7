const Array = [1,2,3,4];
const newArray = [...Array, 5];
const newArray2 = [Array, 5];
console.log(newArray);
console.log(newArray2);

const Person = {
      name: "max"
}
const newPerson = {
      ...Person,
      age: 28
}
console.log(newPerson); 