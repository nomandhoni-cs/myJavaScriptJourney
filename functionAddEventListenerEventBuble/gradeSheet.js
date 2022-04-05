function grade(studentId, marks) {
  if (marks >= 80 && marks <= 100) {
    return "Student " + studentId + " got A+";
  }
  if (marks >= 70 && marks <= 79) {
    return "Student " + studentId + " got A";
  }
  if (marks >= 60 && marks <= 69) {
    return "Student " + studentId + " got A-";
  }
  if (marks >= 50 && marks <= 59) {
    return "Student " + studentId + " got B";
  }
  if (marks >= 40 && marks <= 49) {
    return "Student " + studentId + " got C";
  }
  if (marks >= 33 && marks <= 39) {
    return "Student " + studentId + " got D";
  }
  if (marks >= 0 && marks <= 32) {
    return "Student " + studentId + " got F";
  }
  else{
      return "Wrong Input";
  }
}
var result = grade(12, 50);
console.log(result);
