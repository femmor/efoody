import { useState } from 'react';
import { isEmpty } from 'validator';
import { Loader } from '../../components';
import { showErrorMsg, showSuccessMsg } from '../../helpers/message';
import {
  MdDashboard,
  MdCategory,
  MdOutlineFastfood,
  MdOutlineClose,
} from 'react-icons/md';
import { RiCurrencyFill } from 'react-icons/ri';
import { createCategory } from '../../api/category';

const AdminDashboard = () => {
  const [category, setCategory] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = e => {
    setErrorMsg('');
    setSuccessMsg('');
    setCategory(e.target.value);
  };

  const addCategory = e => {
    e.preventDefault();

    if (isEmpty(category)) {
      setErrorMsg('Please enter a category name');
      setLoading(false);
    } else {
      const data = { category };
      setLoading(true);
      createCategory(data)
        .then(response => {
          setLoading(false);
          setSuccessMsg(response.data.successMessage);
          setCategory('');
          console.log(response.data);
        })
        .catch(error => {
          setLoading(false);
          setErrorMsg(error.response.data.errorMessage);
        });
    }
  };

  const handleMessages = () => {
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(false);
  };

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
            <button className="btn btn-xs btn-outline-success d-flex align-items-center gap-1 justify-content-center">
              <RiCurrencyFill /> View Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const showCategoryModal = () => (
    <div id="addCategoryModal" className="modal fade" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={addCategory}>
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Add Category</h5>
              <button className="btn btn-outline close" data-bs-dismiss="modal">
                <MdOutlineClose size={25} />
              </button>
            </div>
            <div className="modal-body my-2">
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}
              {loading ? (
                <Loader />
              ) : (
                <>
                  <label className="text-secondary">Category</label>
                  <input
                    type="text"
                    value={category}
                    onChange={handleCategoryChange}
                    className="form-control"
                    placeholder="Category name"
                  />
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-info" type="submit">
                Submit
              </button>
            </div>
          </form>
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
