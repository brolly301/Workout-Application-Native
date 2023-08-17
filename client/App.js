import MainNavigation from "./src/navigation/MainNavigation";
import { Provider as UserProvider } from "./src/context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <MainNavigation />
    </UserProvider>
  );
}
