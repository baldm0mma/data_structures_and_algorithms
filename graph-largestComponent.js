import { numGraph } from "./data.js";

const largesComponent = (graph) => {
  const visited = new Set();
  let largestComp = -1;
  for (const node in graph) {
    const size = explore(graph, node, visited);
    if (size > largestComp) largestComp = size;
  }

  return largestComp;
};

const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));

  let size = 1;

  for (const neigh of graph[node]) {
    size += explore(graph, neigh, visited);
  }

  return size;
};

console.log(largesComponent(numGraph));
