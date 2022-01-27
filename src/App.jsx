import "./css/app.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import TaskFormPage from "./pages/TaskFormPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/finished" element={<TaskFormPage />} />
      </Routes>
    </div>
  );
}
export default App;
