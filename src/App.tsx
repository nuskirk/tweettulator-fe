import { AuthProvider } from "./contexts/auth.context";
import DefaultLayout from "./layout";
import { AppRoutes } from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <DefaultLayout>
        <AppRoutes />
        <ToastContainer />
      </DefaultLayout>
    </AuthProvider>
  );
}

export default App;
