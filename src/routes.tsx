import { Route, Routes } from "react-router-dom";
import LoginComponent from "./components/Login";
import { OnlyPublic, RequireAuth } from "./contexts/auth.context";
import HomePage from "./pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <OnlyPublic>
            <LoginComponent />
          </OnlyPublic>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};
