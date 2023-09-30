import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
