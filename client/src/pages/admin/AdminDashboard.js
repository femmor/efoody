import {
  MdDashboard,
  MdCategory,
  MdOutlineFastfood,
  MdOutlineClose,
} from 'react-icons/md';
import { RiCurrencyFill } from 'react-icons/ri';

const AdminDashboard = () => {
  // Views
  const showHeader = () => (
    <div className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="d-flex align-items-center gap-2 text-white">
              <MdDashboard size={26} color="white" />
              Dashboard
            </h3>
          </div>
        </div>
      </div>
    </div>
  );

  const showActionBtms = () => (
    <div className="bg-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-grid mb-2">
            <button
              className="btn btn-outline-info d-flex align-items-center gap-1 justify-content-center"
              data-bs-toggle="modal"
              data-bs-target="#addCategoryModal"
            >
              <MdCategory /> Add Category
            </button>
          </div>
          <div className="col-md-4 d-grid mb-2">
            <button className="btn btn-outline-warning d-flex align-items-center gap-1 justify-content-center">
              <MdOutlineFastfood /> Add Food
            </button>
          </div>
          <div className="col-md-4 d-grid ">
            <button className="btn btn-outline-success d-flex align-items-center gap-1 justify-content-center">
              <RiCurrencyFill /> View Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const showCategoryModal = () => (
    <div id="addCategoryModal" className="modal fade">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title">Add Category</h5>
            <button className="btn btn-outline close" data-bs-dismiss="modal">
              <MdOutlineClose size={25} />
            </button>
          </div>
          <div className="modal-body my-2">
            <form>
              <label className="text-secondary">Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="Category name"
              />
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" type="button">
              Close
            </button>
            <button className="btn btn-info" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="">
      {showHeader()}
      {showActionBtms()}
      {showCategoryModal()}
    </section>
  );
};
export default AdminDashboard;
