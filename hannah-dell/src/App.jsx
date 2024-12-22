import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Hero from "./components/Hero";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Talks from "./pages/Talks";
import Teaching from "./pages/Teaching";
import Travel from "./pages/Travel";



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </BrowserRouter>
  )
}