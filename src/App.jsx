import "./css/app.css";
import { Route, Routes } from "react-router-dom";

import TaskListPage from "./pages/TaskListPage";
import TaskFormPage from "./pages/TaskFormPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/add" element={<TaskFormPage />} />
      </Routes>
    </div>
  );
}
export default App;
