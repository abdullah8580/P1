class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

class Dev extends Person {
  profession: string;

  constructor(name: string, age: number, profession: string) {
    super(name, age);
    this.profession = profession;
  }

  speak() {
    console.log(`My name is ${this.name} and I am a ${this.profession}`);
  }
}

const generalPerson = new Person("Abdullah", 19);
const developer = new Dev("Abdullah", 19, "WordPress Developer");

generalPerson.speak();
developer.speak();

generalPerson.speak();
