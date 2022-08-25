import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components';
import { Home, NotFound, SignIn, SignUp } from '../pages';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
