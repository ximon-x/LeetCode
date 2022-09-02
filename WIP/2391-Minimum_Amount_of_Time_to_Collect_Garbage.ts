function garbageCollection(garbage: string[], travel: number[]): number {
  const trucks = ["P", "G", "M"];
  let workingTrucks: string[] = [];

  for (let garb of garbage) {
    for (let truck of trucks) {
      if (garb.includes(truck) && !workingTrucks.includes(truck)) {
        workingTrucks.push(truck);
      }
    }
  }

  let time = 0;

  for (let truck of workingTrucks) {
    for (let i = 0; i < garbage.length; i++) {
      for (let garb of garbage[i]) {
        if (garb === truck) time += 1;
      }

      if (i !== travel.length) time += travel[i];
    }
  }

  return time;
}

console.log(garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3]));

// Your bug is that the you need to verify that a certain kind of garbage exists before sending out a truck.
