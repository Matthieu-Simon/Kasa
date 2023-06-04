import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/homepage/Homepage';
// import { Fiche} from './pages/Logement';
import { About } from './pages/About';
import { Error } from './pages/Error';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="main">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/fiche" element={<Fiche />} /> */}

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
