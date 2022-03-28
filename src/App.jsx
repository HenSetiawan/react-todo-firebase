import "./css/app.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import AllTaskListPage from "./pages/AllTaskListPage";
import UnfinishedTask from "./pages/UnfinishedTask";
import FinishedTask from "./pages/FinishedTask";
import FabModal from "./components/FabModal";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<AllTaskListPage />} />
        <Route path="/finished" element={<FinishedTask />} />
        <Route path="/unfinished" element={<UnfinishedTask />} />
      </Routes>
      <FabModal />
    </div>
  );
}
export default App;
