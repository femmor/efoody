import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components';
import { Home, SignIn, SignUp } from '../pages';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
