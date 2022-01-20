import Task from "./components/Task";
import Modal from "./components/Modal";

import "./css/app.css";

function App() {
  return (
    <div className="App">
       <Modal />
      <Task title="Belajar React" description="Belajar React dari youtube" />
      <Task title="Belajar Next" description="Belajar Next dari youtube" />
      <Task title="Belajar Remix" description="Belajar Remix dari youtube" />
    </div>
  );
}

export default App;
