class Parent{
    constructor(){
        this.fatherName = "Molla";
    }
}
// Used extends to link 2 class
class Child extends Parent{
    constructor(name){
        // Used super() to get access from other class
        super();
        this.name = name;
    }
    fullName(){
        return this.name + " " + this.fatherName;
    }
}
const firstChild = new Child("Billal");
const secondChild = new Child("Iqbal");
console.log(firstChild); // Billal
console.log(secondChild.fullName()); // Iqbal Molla