import { NavLink, useLocation } from "react-router-dom";
import scss from "./Navigation.module.scss";

export const Navigation = () => {
  const location = useLocation();
  return (
    <nav className={scss.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? scss.active : "")}>
        Home
      </NavLink>

      <NavLink
        to="/transaction/expense-categories"
        state={{ from: location.pathname }}
        className={({ isActive }) => (isActive ? scss.active : "")}>
        Reports Expense
      </NavLink>
      <NavLink
        to="/transaction/income-categories"
        state={{ from: location.pathname }}
        className={({ isActive }) => (isActive ? scss.active : "")}>
        Reports Income
      </NavLink>
    </nav>
  );
};
