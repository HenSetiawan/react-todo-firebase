import '../css/task.css';
import Alert from './Alert';
import { useState } from 'react';
import { deleteTask } from '../services/task-list-firebase';

const Task = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const deleteAlert = async () => {
    setModalOpen(true);
  };

  const deleteHandler = async () => {
    try {
      deleteTask(props.id);
      setModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const cancelAlert = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {isModalOpen ? (
        <Alert onCancel={cancelAlert} onDelete={deleteHandler} />
      ) : null}
      <div className="card">
        <h1 className="title">{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <button className="btn" onClick={deleteAlert}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
