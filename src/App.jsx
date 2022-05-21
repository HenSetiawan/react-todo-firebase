import "./css/app.css";
import { useState } from "react";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import AllTaskListPage from "./pages/AllTaskListPage";
import UnfinishedTask from "./pages/UnfinishedTask";
import FinishedTask from "./pages/FinishedTask";
import FabModal from "./components/FabModal";
import FormModal from "./components/FormModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const showFormModal = () => {
    setModalOpen(true);
  };

  const closeFormModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <Navigation />
      {isModalOpen ? <FormModal closeModal={closeFormModal} /> : null}
      <Routes>
        <Route path="/" element={<AllTaskListPage />} />
        <Route path="/finished" element={<FinishedTask />} />
        <Route path="/unfinished" element={<UnfinishedTask />} />
      </Routes>
      <FabModal showFormModal={showFormModal} />
    </div>
  );
}
export default App;
