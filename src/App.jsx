import "./css/app.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import UnfinishedTask from "./pages/UnfinishedTask";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/unfinished" element={<UnfinishedTask />} />
      </Routes>
    </div>
  );
}
export default App;
