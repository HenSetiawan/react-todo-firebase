import '../css/formModal.css';
import { useRef } from 'react';
import { db } from '../config/firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const FormModal = (props) => {
  const titleTaskRef = useRef();
  const descriptionTaskRef = useRef();
  const dateTaskRef = useRef();
  const tasksCollectionRef = collection(db, "tasks");


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

    await addDoc(tasksCollectionRef,task);
  };
  return (
    <section className="book-form">
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
        <input
          type="text"
          className="input-text"
          placeholder="Description"
          id="description"
          required
          autoComplete="off"
          ref={descriptionTaskRef}
        />
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
