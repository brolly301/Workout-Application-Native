import MainNavigation from "./src/navigation/MainNavigation";
import { Provider as UserProvider } from "./src/context/UserContext";
import { Provider as ExerciseProvider } from "./src/context/ExerciseContext";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function App() {
  return (
    <UserProvider>
      <ExerciseProvider>
        <MainNavigation />
        <Toast />
      </ExerciseProvider>
    </UserProvider>
  );
}
