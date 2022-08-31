import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import Loader from '../loader/Loader';
import { isEmpty } from 'validator';
import { createCategory } from '../../api/category';
import { showErrorMsg, showSuccessMsg } from '../../helpers/message';

const CategoryModal = () => {
  const [category, setCategory] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMessages = () => {
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(false);
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
        })
        .catch(error => {
          setLoading(false);
          setErrorMsg(error.response.data.errorMessage);
        });
    }
  };

  const handleCategoryChange = e => {
    setErrorMsg('');
    setSuccessMsg('');
    setCategory(e.target.value);
  };

  return (
    <div id="addCategoryModal" className="modal fade" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={addCategory}>
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Add Category</h5>
              <button
                className="btn btn-outline close text-white"
                data-bs-dismiss="modal"
              >
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
};

export default CategoryModal;
