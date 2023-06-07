import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Homepage/Homepage';
import { Logement } from './pages/Logement/Logement';
import { About } from './pages/About/About';
import { Error } from './pages/Error/Error';
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <div className="main">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
