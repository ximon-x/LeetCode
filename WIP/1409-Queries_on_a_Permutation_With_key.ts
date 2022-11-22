function processQueries(queries: number[], m: number): number[] {
  // Contains values from 1 to m.
  let p: number[] = [];

  // Holds position of query[i] in p
  let position: number[] = [];

  // Populates p with values from i to m
  for (let i = 1; i <= m; i++) {
    p.push(i);
  }

  console.log(`Initial p is ${p}`);

  for (let i = 0; i < queries.length; i++) {
    position.push(p.indexOf(queries[i]));

    let temp = p.splice(queries[i]);
    p.splice(0, 0, temp[0]);

    console.log(
      `The value of p is \t${p} \tafter moving \t${i} \tto index 0 and return value is \t${position}`
    );
  }

  console.log(position);
  return position;
}

processQueries([3, 1, 2, 1], 5);
