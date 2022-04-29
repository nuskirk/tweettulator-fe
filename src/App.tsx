import { AuthProvider } from "./contexts/auth.context";
import DefaultLayout from "./layout";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </AuthProvider>
  );
}

export default App;
