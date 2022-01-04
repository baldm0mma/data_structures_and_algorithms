import { edges2 } from "./graphData.js";

const shortestPath = (edges, src, dest) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  let shortestPath = Infinity;

  const queue = [[src, 0]];

  while (queue.length > 0) {
    const [node, dist] = queue.shift();
    if (node === dest && dist < shortestPath) shortestPath = dist;
    if (!visited.has(node)) {
      visited.add(node);
      for (const neigh of graph[node]) {
        queue.push([neigh, dist + 1]);
      }
    }
  }

  return shortestPath;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

console.log(shortestPath(edges2, "w", "z"));
