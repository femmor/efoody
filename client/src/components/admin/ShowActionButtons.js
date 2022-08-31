const { MdCategory, MdOutlineFastfood } = require('react-icons/md');
const { RiCurrencyFill } = require('react-icons/ri');

const ShowActionBtms = () => (
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

export default ShowActionBtms;
