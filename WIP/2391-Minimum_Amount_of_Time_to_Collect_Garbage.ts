function garabageCollection(garbage: string[], travel: number[]): number {}

// function garbageCollection(garbage: string[], travel: number[]): number {
//   const trucks = ["P", "G", "M"];
//   let workingTrucks: string[] = [];
//   let workingHouses: { [key: string]: number } = {};

//   for (let i = 0; i < garbage.length; i++) {
//     for (let j = 0; j < trucks.length; j++) {
//       if (
//         garbage[i].includes(trucks[j]) &&
//         !workingTrucks.includes(trucks[j])
//       ) {
//         workingTrucks.push(trucks[j]);
//       }
//       if (garbage[i].includes(trucks[j])) {
//       }
//     }
//   }
//   console.log(workingTrucks);

//   let time = 0;

//   for (let truck of workingTrucks) {
//     for (let i = 0; i < garbage.length; i++) {
//       for (let garb of garbage[i]) {
//         if (garb === truck) time += 1;
//       }

//       if (i !== travel.length) time += travel[i];
//     }
//   }

//   return time;
// }

// console.log(garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3]));

// // Check if the next house has garbage type.
// // Check if all houses have the garabage type per truck.
