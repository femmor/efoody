import ShowHeader from '../../components/admin/AfminHeader';
import ShowActionButtons from '../../components/admin/ShowActionButtons';
import ShowCategoryModal from '../../components/admin/CategoryModal';
import FoodModal from '../../components/admin/FoodModal';

const AdminDashboard = () => {
  return (
    <section className="">
      <ShowHeader />
      <ShowActionButtons />
      <ShowCategoryModal />
      <FoodModal />
    </section>
  );
};
export default AdminDashboard;
