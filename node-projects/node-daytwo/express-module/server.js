var yargs = require('yargs');

// ------------------------------------------ //

// Execute: node server.js drive --speed=30 --car=nisaan
// Output: [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\tcsus-angular-node-training\\node-projects\\node-daytwo\\express-module\\server.js',
//   'drive',
//   '--speed=30',
//   '--car=nisaan'
// ]
// console.log(process.argv);

// ------------------------------------------ //

// Execute: node server.js drive --speed=30 --car=nisaan
// OUtput: { _: [ 'drive' ], speed: 30, car: 'nisaan', '$0': 'server.js' }
// console.log(yargs.argv);

// ------------------------------------------ //

// Execute: node server.js drive
// Output: Driving
// let command = yargs.argv._[0];
// if (command == 'fly') {
//     console.log('Flying!!');
// } else if (command == 'drive') {
//     console.log('Driving');
// } else {
//     console.log('Neither Flying No Driving!!');
// }

// ------------------------------------------ //

// Execute node server.js drive --speed=30 --car=nisaan
let command = yargs.argv._[0];
let params = yargs.argv
if (command == 'fly') {
    console.log('Flying!!');
} else if (command == 'drive') {
    if (params.speed && params.car) {
        console.log(`You are driving ${params.car} at the speed of ${params.speed}.`);
    } else {
        console.log('Driving!!');
    }
} else {
    console.log('Neither Flying No Driving!!');
}