import { Route, Routes } from "react-router-dom";
import TaskListPage from '../pages/TaskListPage';
import TaskFormPage from "../pages/TaskFormPage";

const Navigation = () => {
  return (
    <div>
      <div className="nav">
        <Routes>
          <Route path="/" element={<TaskListPage />} />
          <Route path="/add" element={<TaskFormPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Navigation;
