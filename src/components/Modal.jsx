import "../css/modal.css";
const Modal = () => {
  return (
    <div>
      <div className="modal">
        <div className="card-modal">
          <p>Are You Sure ?</p>
          <button className="btn-cancel">Cancel</button>
          <button className="btn-confirm">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
