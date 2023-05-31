import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/homepage/Homepage';
import { About } from './pages/About';
import { Error } from './pages/ErrorPage';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="main">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
