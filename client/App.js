import MainNavigation from "./src/navigation/MainNavigation";
import { Provider as UserProvider } from "./src/context/UserContext";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function App() {
  return (
    <UserProvider>
      <MainNavigation />
      <Toast />
    </UserProvider>
  );
}
