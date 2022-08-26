import { MdDashboard, MdCategory, MdOutlineFastfood } from 'react-icons/md';
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
            <button className="btn btn-outline-info d-flex align-items-center gap-1 justify-content-center">
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

  return (
    <section className="">
      {showHeader()}
      {showActionBtms()}
    </section>
  );
};
export default AdminDashboard;
