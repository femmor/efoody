const Alert = ({ type, title, msg, onClick }) => {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
    >
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
      <strong>{title}:</strong> {msg}
    </div>
  );
};

export default Alert;
