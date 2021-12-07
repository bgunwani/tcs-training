// Execute: node app.js
// Output: [ 'C:\\Program Files\\nodejs\\node.exe','D:\\tcsus-angular-node-training\\node-projects\\node-daytwo\\express-module\\app.js']
// console.log(process.argv);

// ------------------------------------------ //

// Execute: node app.js fly
// Output: ['C:\\Program Files\\nodejs\\node.exe','D:\\tcsus-angular-node-training\\node-projects\\node-daytwo\\express-module\\app.js','fly']
// console.log(process.argv);

// ------------------------------------------ //

// Execute: node app.js fly
// Output: Flying
// let command = process.argv[2];
// if (command == 'fly') {
//     console.log('Flying!!');
// } else if (command == 'drive') {
//     console.log('Driving');
// } else {
//     console.log('Neither Flying No Driving!!');
// }

// ------------------------------------------ //

// Execute: node app.js drive --speed=30 --car=nisaan
// Output: [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\tcsus-angular-node-training\\node-projects\\node-daytwo\\express-module\\app.js',
//   'drive',
//   '--speed=30',
//   '--car=nisaan'
// ]
console.log(process.argv);