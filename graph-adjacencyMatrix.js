const verticies = ["a", "b", "c", "d", "e"];

const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

// const vertIndecies = {
//   a: 0,
//   b: 1,
//   c: 2,
//   d: 3,
//   e: 4,
// };
// How to build the above progromatically vvv;
const vertIndecies = verticies.reduce((acc, curr) => {
  acc[curr] = verticies.indexOf(curr);
  return acc;
}, {});

// console.log(vertIndecies);

// Methods

// findAdjacencies(node: vertex): vertex[];
const findAdjacencies = (node) => {
  /**
   * This operation will take O(n) time; if we create a lookup for the verticies' indecies,
   * we can keep that to constant time.
   */
  // Previous implementation vvv
  // const vertIndex = verticies.indexOf(node);
  const vertIndex = vertIndecies[node];
  if (!vertIndex)
    return `Sorry, node "${node}" does not exist. Please enter a valid node.`;
  const row = adjacencyMatrix[vertIndex];
  const connections = [];
  row.forEach(
    (indexVal, index) => indexVal === 1 && connections.push(verticies[index])
  );
  return connections;
};

// console.log(findAdjacencies("r"));

// isConnected(node1: vertex, node2: vertex): boolean;
const isConnected = (node1, node2) => {
  if (!verticies.includes(node1) || !verticies.includes(node2))
    return `Please enter 2 valid nodes. Either "${node1}" or "${node2}" are invalid.`;
  return Boolean(adjacencyMatrix[vertIndecies[node1]][vertIndecies[node2]]);
};

console.log(isConnected("a", "r"));
