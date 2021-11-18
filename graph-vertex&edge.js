const verticies = ["a", "b", "c", "d", "e"];

const edges = [
  ["a", "b"],
  ["a", "d"],
  ["c", "b"],
  ["c", "d"],
  ["c", "e"],
  ["d", "e"],
];

const adjacentNodes = (node) => {
  return Array.from(
    new Set(
      edges
        .filter((edge) => edge.includes(node))
        .flat()
        .filter((item) => item !== node)
    )
  );
};

// console.log(adjacentNodes("a"));

const isConnected = (node1, node2) => {
  return edges.some((edge) => edge.includes(node1) && edge.includes(node2));
};

console.log(isConnected("e", "d"));