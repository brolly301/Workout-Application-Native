const removeExercise = (index, setState) => {
  setState((prevWorkoutData) => {
    // Use filter to create a new array without the exercise at the specified index
    const updatedExercises = prevWorkoutData.exercises.filter(
      (exercise, idx) => idx !== index
    );

    return {
      ...prevWorkoutData,
      exercises: updatedExercises,
    };
  });
};

const removeSet = (exerciseIndex, setIndex, setState) => {
  setState((prevWorkoutData) => {
    const updatedWorkout = { ...prevWorkoutData };
    const exerciseToUpdate = updatedWorkout.exercises[exerciseIndex];

    // Remove the set at the specified index
    const updatedSets = exerciseToUpdate.sets.filter(
      (set, idx) => idx !== setIndex
    );

    // Renumber the remaining sets
    const renumberedSets = updatedSets.map((set, idx) => ({
      ...set,
      set: idx + 1,
    }));

    // Update the exercise in the workout data with the renumbered sets
    updatedWorkout.exercises[exerciseIndex] = {
      ...exerciseToUpdate,
      sets: renumberedSets,
    };

    return updatedWorkout;
  });
};

//Take copy of state, push the exercise into the exercises array and give default set values
const handleExerciseInput = (name, level, category, setState, callback) => {
  setState((prevData) => ({
    ...prevData,
    exercises: [
      ...prevData.exercises,
      {
        name,
        level,
        category,
        sets: [{ set: 1, kg: "", reps: "" }],
      },
    ],
  }));
  if (callback) {
    callback();
  }
};

//Take copy of state, use the exercises index to choose that exercise
//Use set index to specify that exact set then field to update a specific field
//Then spcify the value to update and use this as an onChangeText event
const handleExerciseInputChange = (
  exerciseIndex,
  setIndex,
  field,
  value,
  setState
) => {
  setState((prevData) => ({
    ...prevData,
    exercises: prevData.exercises.map((exercise, idx) => {
      if (idx === exerciseIndex) {
        return {
          ...exercise,
          sets: exercise.sets.map((set, setIdx) => {
            if (setIdx === setIndex) {
              return { ...set, [field]: value };
            }
            return set;
          }),
        };
      }
      return exercise;
    }),
  }));
};

const handleExerciseNotesChange = (exerciseIndex, field, value, setState) => {
  setState((prevData) => ({
    ...prevData,
    exercises: prevData.exercises.map((exercise, idx) => {
      if (idx === exerciseIndex) {
        return { ...exercise, [field]: value };
      }
      return exercise;
    }),
  }));
};

//
const addSetToExercise = (exerciseIndex, state, setState) => {
  const updatedWorkout = { ...state };
  updatedWorkout.exercises[exerciseIndex].sets.push({
    set: updatedWorkout.exercises[exerciseIndex].sets.length + 1,
    kg: "",
    reps: "",
  });
  setState(updatedWorkout);
};

const capitalizeEveryWord = (string) => {
  // Split the input string into an array of words
  const words = string.split(" ");

  // Iterate through each word and capitalize the first letter
  const capitalizedWords = words.map((word) => {
    // Handle empty strings
    if (word.length === 0) {
      return word;
    }

    // Capitalize the first letter and make the rest of the word lowercase
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the capitalized words back into a single string
  const resultString = capitalizedWords.join(" ");

  return resultString;
};

export {
  removeExercise,
  removeSet,
  handleExerciseInput,
  handleExerciseInputChange,
  handleExerciseNotesChange,
  addSetToExercise,
  capitalizeEveryWord,
};
