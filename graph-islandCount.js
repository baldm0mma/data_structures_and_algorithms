import { grid } from "./graphData.js";

const islandCount = (grid) => {
  const visited = new Set();
  let islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited)) islandCount++;
    }
  }

  return islandCount;
};

const explore = (grid, row, col, visited) => {
  if (!grid[row] || !grid[row][col]) return;
  if (visited.has(row + "," + col)) return;
  visited.add(row + "," + col);
  if (grid[row][col] === "w") return;

  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row, col + 1, visited);

  return true;
};

console.log(islandCount(grid));
