const friendsAge = [20 , 23, 24, 21];
const cousinAge = [31, 42, 34, 12];
const parentsAge = [54, 53, 52, 64];
const combinedAge = friendsAge.concat(cousinAge).concat(parentsAge);
console.log(combinedAge); // [20, 23, 24, 21, 31, 42, 34, 12, 54, 53, 52, 64 ]
const combinedAge2 = [...friendsAge, ...cousinAge, ...parentsAge];
console.log(combinedAge2);// [20, 23, 24, 21, 31, 42, 34, 12, 54, 53, 52, 64 ]

const maximum = Math.max(...friendsAge, ...cousinAge, ...parentsAge);
console.log(maximum); // 64