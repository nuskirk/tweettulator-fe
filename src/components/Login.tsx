import clsx from "clsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const styles = {
  container: clsx(
    "flex min-h-screen flex-col items-center justify-center bg-white"
  ),
  roundedWrapper: clsx(
    "w-full max-w-lg rounded bg-green-400 p-12 pb-6 shadow-2xl sm:w-3/4"
  ),
  companyLogo: clsx("pb-4 text-3xl font-semibold text-white"),
  credentialInput: clsx(
    "m-4 ml-0 block w-full rounded p-1 text-lg font-normal text-gray-700 placeholder-gray-300"
  ),
  loginBtn: clsx(
    "mt-2 inline-block rounded bg-green-600 px-6 py-2 text-white shadow-lg hover:bg-green-700 focus:bg-green-800"
  ),
};

export default function LoginComponent() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const handleLogin = () => {
    auth.signIn(user, () => {
      console.log("===");
      
      navigate("/");
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.roundedWrapper}>
        <div className={styles.companyLogo}>NUS Technology</div>
        <input
          className={styles.credentialInput}
          id="username"
          type="text"
          placeholder="your username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className={styles.credentialInput}
          id="password"
          type="password"
          placeholder="password"
        />
        <button className={styles.loginBtn} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
