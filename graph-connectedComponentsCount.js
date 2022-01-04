import { numGraph } from "./graphData.js";

const connectedComponentsCount = (graph) => {
  let islands = 0;
  const visited = new Set();
  for (const node in graph) {
    if (explore(graph, node, visited)) {
      islands++;
    }
  }
  return islands;
};

const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return false;
  visited.add(String(node));
  for (const neigh of graph[node]) {
    explore(graph, neigh, visited);
  }
  return true;
};

console.log(connectedComponentsCount(numGraph));
