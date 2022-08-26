import { MdDashboard } from 'react-icons/md';

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

  return <section className="">{showHeader()}</section>;
};
export default AdminDashboard;
