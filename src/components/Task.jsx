import "../css/task.css";
import Modal from "./Modal";
import { useState } from "react";

const Task = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const deleteHandler = () => {
    setModalOpen(true);
  };

  const cancelHandler = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {isModalOpen ? <Modal onCancel={cancelHandler} /> : null}
      <div className="card">
        <h1 className="title">{props.title}</h1>
        <p>{props.description}</p>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
