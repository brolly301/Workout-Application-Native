const exerciseSortFunction = (state, filter) => {
  switch (filter) {
    case "alphabetical":
      return [...state]
        .filter((exercise) => exercise.name !== null)
        .sort((a, b) => a.name.localeCompare(b.name));
    case "reverse":
      return [...state].filter((exercise) => exercise.name !== null).reverse();
    default:
      return state;
  }
};

export default exerciseSortFunction;
