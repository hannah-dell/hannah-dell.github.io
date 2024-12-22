import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Talks from "./pages/Talks";
import Teaching from "./pages/Teaching";
import Travel from "./pages/Travel";



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </BrowserRouter>
  )
}