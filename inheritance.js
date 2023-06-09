class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(`My name Is ${this.name}`);
  }
}

class Student extends Person {
  subject;
  roll;
  constructor(name, age, subject, roll) {
    super(name, age);
    this.subject = subject;
    this.roll = roll;
  }
  showDetails() {
    console.log(this.name, this.age, this.subject, this.roll);
  }
}

class Teacher extends Person {
  faculty;
  designation;
  constructor(name, age, faculty, designation) {
    super(name, age);
    this.faculty = faculty;
    this.designation = designation;
  }
  showDetails() {
    console.log(this.name, this.age, this.faculty, this.designation);
  }
}

const stud = new Student("Mehedy", 23, "CSE", 23232);
const tec = new Teacher("Hasan", 43, "Textile", "LECTURER");

stud.showDetails();
tec.showDetails();

