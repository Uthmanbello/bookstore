import { Routes, Route } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<BooksContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
