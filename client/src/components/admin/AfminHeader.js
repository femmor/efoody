const { MdDashboard } = require('react-icons/md');

const ShowHeader = () => (
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

export default ShowHeader;
