function groupWorkoutsByMonth(workouts) {
  const groupedWorkouts = {};

  workouts.forEach((workout) => {
    const date = new Date(workout.date);
    const monthYearKey = `${date.getMonth()}-${date.getFullYear()}`;

    if (!groupedWorkouts[monthYearKey]) {
      groupedWorkouts[monthYearKey] = {
        monthYear: date.toLocaleDateString("en-gb", {
          year: "numeric",
          month: "long",
        }),
        workouts: [],
      };
    }

    groupedWorkouts[monthYearKey].workouts.push(workout);
  });

  return Object.values(groupedWorkouts);
}
