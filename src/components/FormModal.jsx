import "../css/formModal.css";

const formModal = (props) => {
  return (
    <section className="book-form">
      <form>
        <div className="modal-header">
          <p className="text-secondary">Tambahkan Buku</p>
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
        />
        <p className="text-secondary">Description</p>
        <input
          type="text"
          className="input-text"
          placeholder="Description"
          id="description"
          required
          autoComplete="off"
        />
        <p className="text-secondary">Date</p>
        <input
          type="date"
          className="input-text"
          placeholder="Date"
          id="book-year"
          required
          autoComplete="off"
        />
        <button type="submit" className="btn btn-done" id="btn-save">
          Add New Task
        </button>
      </form>
    </section>
  );
};

export default formModal;
