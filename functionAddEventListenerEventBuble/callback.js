function workersDetails(name, age, task) {
  console.log("Name : ", name);
  console.log("Age : ", age);
  //I can call a function inside of a function thats why this is called call back function
  task();
}
//I called these two function in above function
function roleOfCeo() {
  console.log("Do your JOB and Handle All Employee");
}
function roleOfCoFounder() {
    console.log('Help the business to grow');
}
workersDetails("Noman Dhoni", 20, roleOfCeo);
workersDetails("Mehedi Hasan Mridul", 21, roleOfCoFounder);
workersDetails("Sabbir Ahmed Shuvo", 21, roleOfCoFounder);
