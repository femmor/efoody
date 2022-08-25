export const showErrorMsg = (msg, onClick) => (
  <div className="alert alert-danger alert-dismissible fade show" role="alert">
    {msg}
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      onClick={onClick}
    ></button>
  </div>
);

export const showSuccessMsg = (msg, onClick) => (
  <div className="alert alert-success alert-dismissible fade show" role="alert">
    {msg}
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      onClick={onClick}
    ></button>
  </div>
);
