// Using class keyword to create constructor function and also to make code readible and easy.
class User {
  //creating constructor along with the two parameters.
  constructor(name, email) {
    // Using this keyword which is object oriented and help to assign values.
    this.name = name;
    this.email = email;
  }
//creating method to get deatils.
  getDetails() {
    // If the method get invoked by the operator so it will log this-
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

class Student extends User {
  constructor(name, email, studentId) {
    // The super keyword is used with the extends keyword. this keyword help to specify the inheretin parameters.
    super(name, email);
    this.studentId = studentId;
  }
//Student methods.

  enroll(){
    // If the method get invoked by the operator so it will log this-
    console.log(`Student ${this.name} has enrolled.`);
  }

  reject(){
    // If the method get invoked by the operator so it will log this-
    console.log(`Student ${this.name} is not eligible for the course`);
  }
}

class Instructor extends User {
  constructor(name, email, instructorId) {
    super(name, email);
    this.instructorId = instructorId;
  }
//Instructor methods.

  assignGrade() {
    // If the method get invoked by the operator so it will log this-
    console.log(`Instructor ${this.name} assigned a grade.`);
  }

  rusticate(){
    // If the method get invoked by the operator so it will log this-
    console.log(`${student.name} is rusticated by the instructor ${this.name}`)
  }
}
// Creating an instance of Student inside a varible student
const student = new Student('Alice', 'alice@example.com', 'S123');
// Creating an instance of Instructor inside a varible instructor
const instructor = new Instructor('Bob', 'bob@example.com', 'I456');

//invoking Student mehods.
student.getDetails();
student.enroll();
student.reject();

//invoking instructor mehods.
instructor.getDetails();
instructor.assignGrade();
instructor.rusticate();
