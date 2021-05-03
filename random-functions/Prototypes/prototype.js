/*
  A function's prototype: The object instance that will become the prototype for all objects created using this function as a constructor.
*/

function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const steve = new Person('steve', 'kim')
console.log(steve.__proto__)
console.log(steve)
Person.prototype.age = 24
console.log(steve.age)
/*
  An object's prototype: The object instance from which the object is inherited.
*/

// prototypal inheritence

function Student(firstName, lastName) {
  Person.call(this, firstName, lastName)
  Student.prototype = Object.create(Person.prototype)
  Student.prototype.constructor = Student
}

const steve3 = new Student('steve', 'kim')
console.log(steve3)
console.log(steve3.__proto__)
console.log(Student.prototype)

