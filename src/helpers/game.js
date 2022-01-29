import _ from "lodash";

export const MAX_ROWS = 6;
export const MAX_LEN = 5;
export const MAX_X = MAX_LEN - 1;
export const MAX_Y = MAX_ROWS - 1;
export const DEFAULT_GRID = new Array(MAX_ROWS)
  .fill(null)
  .map(() => new Array(MAX_LEN).fill(""));

export const incrementCursor = (x, y) => {
  if (x === MAX_X && y === MAX_Y) {
    return { x: MAX_X + 1, y: MAX_Y };
  }

  if (x === MAX_X) {
    return { x: 0, y: y + 1 };
  }

  return { x: x + 1, y };
};

export const decrementCursor = (x, y) => {
  if (x === 0 && y === 0) {
    return { x, y };
  }

  if (x === 0) {
    return { x: MAX_X, y: y - 1 };
  }

  return { x: x - 1, y };
};

export const calculateMatches = (words) => {
  const matches = _.cloneDeep(DEFAULT_GRID);
  const solutionIndex = words
    .map((r) => r.join("").trim().length === MAX_LEN)
    .lastIndexOf(true);
  const solution = words[solutionIndex];

  if (solutionIndex < 0) {
    return matches;
  }

  if (solutionIndex > 0) {
    for (let y = 0; y < solutionIndex; y++) {
      const remaining = _.clone(solution);
      for (let x = 0; x <= MAX_LEN - 1; x++) {
        const chr = words[y][x];
        const foundIndex = remaining.indexOf(chr);

        if (solution[x] === chr) {
          remaining[x] = null;
          matches[y][x] = "full";
        } else if (foundIndex >= 0) {
          remaining[foundIndex] = null;
          matches[y][x] = "partial";
        } else {
          matches[y][x] = "miss";
        }
      }
    }
  }

  _.fill(matches[solutionIndex], "full");
  return matches;
};
