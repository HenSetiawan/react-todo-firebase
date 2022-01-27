import { Link } from "react-router-dom";
import "../css/navigation.css";

const Navigation = () => {
  return (
    <div>
      <div className="navbar">
        <nav>
          <ul>
            <li className="active">
              <Link to="/">All Task /</Link>
            </li>
            <li><Link to="/finished">Finished /</Link></li>
            <li><Link to="/unfinished">Unfinished /</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
