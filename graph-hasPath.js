import { stringGraph } from "./data.js";

// recursive solution
// const hasPath = (graph, src, dest) => {
//   if (src === dest) return true;
//   for (const neigh of graph[src]) {
//     if (hasPath(graph, neigh, dest)) return true;
//   }
//   return false;
// };

// iterative solution
const hasPath = (graph, src, dest) => {
  const queue = [src];
  while (queue.length) {
    const node = queue.shift();
    if (node === dest) return true;
    for (const neigh of graph[node]) {
      queue.push(neigh);
    }
  }
  return false;
};

console.log(hasPath(stringGraph, "f", "k"));
console.log(hasPath(stringGraph, "f", "j"));
console.log(hasPath(stringGraph, "h", "i"));
