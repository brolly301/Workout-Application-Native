import MainNavigation from "./src/navigation/MainNavigation";
import { Provider as UserProvider } from "./src/context/UserContext";
import { Provider as ExerciseProvider } from "./src/context/ExerciseContext";
import { Provider as WorkoutProvider } from "./src/context/WorkoutContext";
import { Provider as ExerciseSetProvider } from "./src/context/ExerciseSetContext";
import { Provider as RoutineProvider } from "./src/context/RoutineContext";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { TimerProvider } from "./src/context/TimerContext";

export default function App() {
  return (
    <RoutineProvider>
      <TimerProvider>
        <UserProvider>
          <WorkoutProvider>
            <ExerciseProvider>
              <ExerciseSetProvider>
                <MainNavigation />
                <Toast />
              </ExerciseSetProvider>
            </ExerciseProvider>
          </WorkoutProvider>
        </UserProvider>
      </TimerProvider>
    </RoutineProvider>
  );
}
