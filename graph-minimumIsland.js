import { grid } from "./graphData.js";

const minimumIsland = (grid) => {
  // iterate through all grid indexes
  // if we hit an "l", dfs explore the neighbors until we reach the end
  // after exploration update minIsland variable
  // return minIsland variable when finished iterating
  const visited = new Set();
  let minIsland = Infinity;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const size = explore(grid, row, col, visited);
      if (size < minIsland && size !== 0) minIsland = size;
    }
  }

  return minIsland;
};

const explore = (grid, row, col, visited) => {
  // checks
  // inbounds?
  // visited?
  // a land?

  if (!grid[row] || !grid[row][col]) return 0;
  if (grid[row][col] === "w") return 0;
  if (visited.has(`${col},${row}`)) return 0; // "0,3" or "3,5"
  visited.add(`${col},${row}`);

  let size = 1;

  size += explore(grid, row - 1, col, visited); // top
  size += explore(grid, row + 1, col, visited); // bottom
  size += explore(grid, row, col - 1, visited); // left
  size += explore(grid, row, col + 1, visited); // right

  return size;
};

console.log(minimumIsland(grid));
