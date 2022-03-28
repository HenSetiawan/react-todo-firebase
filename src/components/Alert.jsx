import "../css/modal.css";
const Modal = (props) => {
  return (
    <div>
      <div className="modal">
        <div className="card-modal">
          <p>Are You Sure ?</p>
          <button className="btn-cancel" onClick={props.onCancel}>
            Cancel
          </button>
          <button className="btn-confirm">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
