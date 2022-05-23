import '../css/formModal.css';
import { useRef } from 'react';
import { addNewTaskList } from '../services/task-list-firebase';

const FormModal = (props) => {
  const titleTaskRef = useRef();
  const descriptionTaskRef = useRef();
  const dateTaskRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const titleTask = titleTaskRef.current.value;
    const descriptionTask = descriptionTaskRef.current.value;
    const dateTask = dateTaskRef.current.value;

    const task = {
      title: titleTask,
      description: descriptionTask,
      date: dateTask,
    };

    await addNewTaskList(task);
  };
  return (
    <section className="task-form">
      <form onSubmit={formSubmitHandler}>
        <div className="modal-header">
          <p className="text-secondary">Add New Task</p>
          <span
            className="text-secondary close-modal"
            onClick={props.closeModal}
          >
            X
          </span>
        </div>
        <hr />
        <p className="text-secondary">Task Title</p>
        <input
          type="text"
          className="input-text"
          placeholder="taks title"
          id="task-title"
          required
          autoComplete="off"
          ref={titleTaskRef}
        />
        <p className="text-secondary">Description</p>
        <textarea
          className="input-text"
          placeholder="Description"
          name="description"
          rows="4"
          cols="50"
          ref={descriptionTaskRef}
        ></textarea>
        <p className="text-secondary">Date</p>
        <input
          type="date"
          className="input-text"
          placeholder="Date"
          id="book-year"
          required
          autoComplete="off"
          ref={dateTaskRef}
        />
        <button type="submit" className="btn btn-done" id="btn-save">
          Add New Task
        </button>
      </form>
    </section>
  );
};

export default FormModal;
