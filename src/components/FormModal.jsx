import "../css/formModal.css";

const formModal = (props) => {
  return (
    <section className="book-form">
      <form>
        <div className="modal-header">
          <p className="text-secondary">Tambahkan Buku</p>
          <span className="text-secondary close-modal">X</span>
        </div>
        <hr />
        <p className="text-warning">Semua input harus terisi !!!</p>
        <p className="text-secondary">Judul Buku</p>
        <input
          type="text"
          className="input-text"
          placeholder="Judul Buku"
          id="book-title"
          required
          autocomplete="off"
        />
        <p className="text-secondary">Penulis Buku</p>
        <input
          type="text"
          className="input-text"
          placeholder="Penulis Buku"
          id="book-author"
          required
          autocomplete="off"
        />
        <p className="text-secondary">Tahun Terbit</p>
        <input
          type="number"
          className="input-text"
          placeholder="Tahun Terbit"
          id="book-year"
          required
          autocomplete="off"
        />
        <div>
          <span className="text-secondary">Sudah Dibaca</span>
          <input type="checkbox" name="isCompleted" id="isCompleted" />
        </div>
        <button type="submit" className="btn btn-done" id="btn-save">
          Tambahkan Buku
        </button>
      </form>
    </section>
  );
};

export default formModal;
