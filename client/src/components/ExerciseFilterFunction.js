const exerciseFilterFunction = (state, filter) => {
  switch (filter) {
    case "all":
      return state;
    case "abdominals":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("abdominals")
      );
    case "abductors":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("abductors")
      );
    case "adductors":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("adductors")
      );
    case "biceps":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("biceps")
      );
    case "calves":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("calves")
      );
    case "chest":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("chest")
      );
    case "forearms":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("forearms")
      );
    case "glutes":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("glutes")
      );
    case "hamstrings":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("hamstrings")
      );
    case "lats":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("lats")
      );
    case "lower back":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("lower back")
      );
    case "middle back":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("middle back")
      );
    case "neck":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("neck")
      );
    case "quadriceps":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("quadriceps")
      );
    case "shoulders":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("shoulders")
      );
    case "traps":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("traps")
      );
    case "triceps":
      return state?.filter((exercise) =>
        exercise.primaryMuscles.includes("triceps")
      );
    case "custom exercises":
      return state?.filter(
        (exercise) => exercise.userID !== undefined && exercise.userID !== null
      );
    default:
      return state;
  }
};

export default exerciseFilterFunction;
