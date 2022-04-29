import clsx from "clsx";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const styles = {
  link: clsx(
    "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
  ),
};

export default function HeaderComponent() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Main Menu</span>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
            </li>
            <li>
              {!user ? (
                <NavLink to="login" className={styles.link}>
                  Login
                </NavLink>
              ) : (
                /*eslint-disable */
                <a
                  href="#"
                  onClick={(e) => signOut(() => navigate("/login"))}
                  className={styles.link}
                >
                  Logout
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
