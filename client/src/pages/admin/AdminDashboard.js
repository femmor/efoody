import { useEffect, useState } from 'react';
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
import { createCategory, getCategories } from '../../api/category';
import { createProduct } from '../../api/product';

const AdminDashboard = () => {
  const [category, setCategory] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(null);
  const [productData, setProductData] = useState({
    productImage: null,
    productName: '',
    productDesc: '',
    productPrice: '',
    productCategory: '',
    productQty: '',
  });

  const {
    productImage,
    productName,
    productDesc,
    productPrice,
    productCategory,
    productQty,
  } = productData;

  const loadCategories = async () => {
    await getCategories()
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadCategories();
  }, [loading]);

  const handleCategoryChange = e => {
    setErrorMsg('');
    setSuccessMsg('');
    setCategory(e.target.value);
  };

  // Category logic
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

  const handleMessages = () => {
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(false);
  };

  // Food Item logic
  const handleProductChange = e => {
    const { name, value } = e.target;

    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleProductImage = e => {
    const { name, files } = e.target;

    setProductData({
      ...productData,
      [name]: files[0],
    });
  };

  const handleProductSubmit = e => {
    e.preventDefault();

    // Client side validation
    if (productImage === null) {
      setErrorMsg('Please select an image');
    } else if (isEmpty(productName)) {
      setErrorMsg('Please add a product name');
    } else if (isEmpty(productDesc)) {
      setErrorMsg('Please add a product description');
    } else if (isEmpty(productPrice)) {
      setErrorMsg('Please add a product price');
    } else if (isEmpty(productCategory)) {
      setErrorMsg('Please add a product category');
    } else if (isEmpty(productQty)) {
      setErrorMsg('Please add a product quantity');
    } else {
      let formData = new FormData();

      formData.append('productImage', productImage);
      formData.append('productName', productName);
      formData.append('productDesc', productDesc);
      formData.append('productCategory', productCategory);
      formData.append('productPrice', productPrice);
      formData.append('productQty', productQty);

      createProduct(formData)
        .then(response => console.log('Server response: ', response))
        .catch(error => console.log(error));
    }
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
            <button
              className="btn btn-outline-warning d-flex align-items-center gap-1 justify-content-center"
              data-bs-toggle="modal"
              data-bs-target="#addFoodModal"
            >
              <MdOutlineFastfood /> Add Food
            </button>
          </div>
          <div className="col-md-4 d-grid mb-2">
            <button
              className="btn btn-outline-success d-flex align-items-center gap-1 justify-content-center"
              data-bs-toggle="modal"
              data-bs-target="#ordersModal"
            >
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

  const showFoodModal = () => (
    <div id="addFoodModal" className="modal fade" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleProductSubmit}>
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title">Add Food</h5>
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
                  <div className="mb-3">
                    <label className="form-label text-secondary">
                      Product image
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      name="productImage"
                      onChange={handleProductImage}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-group">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Food name"
                      value={productName}
                      name="productName"
                      onChange={handleProductChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-group text-secondary">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      type="text"
                      placeholder="Food description"
                      rows={3}
                      value={productDesc}
                      name="productDesc"
                      onChange={handleProductChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-group text-secondary">Price</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="0.00"
                      value={productPrice}
                      name="productPrice"
                      onChange={handleProductChange}
                    />
                  </div>
                  <div className="mb-3 row">
                    <div className="col-md-6 form-group">
                      <label className="text-secondary">Category</label>
                      <select
                        className="form-select"
                        aria-label="Category select"
                        name="productCategory"
                        onChange={handleProductChange}
                        defaultValue="selected"
                      >
                        <option disabled value="selected">
                          Select a category
                        </option>
                        {categories &&
                          categories.map(c => (
                            <option value={c._id} key={c._id}>
                              {c.category}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="text-secondary">Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        min={1}
                        max={1000}
                        placeholder={1}
                        value={productQty}
                        name="productQty"
                        onChange={handleProductChange}
                      />
                    </div>
                  </div>
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
              <button className="btn btn-warning text-white" type="submit">
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
      {showFoodModal()}
    </section>
  );
};
export default AdminDashboard;
