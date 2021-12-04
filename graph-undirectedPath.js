import { edges1 } from "./data.js";

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  return explore(graph, nodeA, nodeB, visited);
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

const explore = (graph, src, dest, visited) => {
  if (src === dest) return true;
  if (visited.has(src)) return;
  visited.add(src);
  for (const neigh of graph[src]) {
    if (explore(graph, neigh, dest, visited)) return true;
  }

  return false;
};

console.log(undirectedPath(edges1, "i", "o"));
