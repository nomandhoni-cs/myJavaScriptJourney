class Student{
    constructor(classRoll, Name){
        this.classRoll = classRoll;
        this.Name = Name;
        this.school = "Datra Shibpur Govt. Primary School";
    }
}
const studentOne = new Student(1, "Noman");
const studentTwo = new Student(2, "Maria");
console.log(studentOne, studentTwo);
console.log(`Roll ${studentOne.classRoll} is ${studentOne.Name}`); // 1