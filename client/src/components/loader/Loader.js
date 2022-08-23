import Loading from 'react-loading';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <Loading color="#095fd6" type="spin" height={70} width={70} />
    </div>
  );
};
export default Loader;
