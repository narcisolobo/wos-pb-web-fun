/* 
  Loops
*/

// FOR LOOPS
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1. Minion
// 2. Minion starts
// 3. Minion stops ("as long as")
// 4. Minion changes

const muppets = ['Fozzie', 'Miss Piggy', 'Kermit'];

// minion
for (let i = 0; i < muppets.length; i++) {
  console.log(muppets[i]);
}

// minion and cosplayer
for (let muppet of muppets) {
  console.log(muppet);
}

muppets.forEach((muppet) => console.log(muppet));

// WHILE LOOPS
// 1. Minion
// 2. Minion starts
// 3. Minion stops ("as long as")
// 4. Minion changes

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// What use case for while/for
// For loops are for when you know how many times a loop should run
// While loops are for when you do not
