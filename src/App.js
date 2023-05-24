import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/home/Home';
import { About } from './pages/About';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
