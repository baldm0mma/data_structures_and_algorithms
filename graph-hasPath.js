// import { graph } from "./graphData.js";

const graph = {
  "a": ["b", "f"],
  "b": ["c"],
  "c": ["d"],
  "f": ["g"],
  "g": ["h"]
}

// recursive solution
const hasPath = (graph, src, dest) => {
  console.log(src, dest)
  if (src === dest) return true;
  for (const neigh of graph[src]) {
    if (hasPath(graph, neigh, dest)) return true;
  }
  return false;
};

// iterative solution
// const hasPath = (graph, src, dest) => {
//   const queue = [src];
//   while (queue.length) {
//     const node = queue.shift();
//     if (node === dest) return true;
//     for (const neigh of graph[node]) {
//       queue.push(neigh);
//     }
//   }
//   return false;
// };

console.log(hasPath(graph, "a", "d"));
console.log(hasPath(graph, "a", "h"));
console.log(hasPath(graph, "b", "g"));
