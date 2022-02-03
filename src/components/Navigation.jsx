import { NavLink } from "react-router-dom";
import "../css/navigation.css";

const Navigation = () => {
  return (
    <div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                All Task /
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/finished"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Finished /
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/unfinished"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Unfinished
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
