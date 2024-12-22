import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { Helmet } from "react-helmet";

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
      <Hero homeName="Home"/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Home - Hannah Dell</title>
              </Helmet>
              <Home />
            </>
          }
        />
        <Route 
          path="/talks" 
          element={
            <>
              <Helmet>
                <title>Talks - Hannah Dell</title>
              </Helmet>
              <Talks />
            </>
          }
        />
        <Route 
          path="/teaching" 
          element={
            <>
              <Helmet>
                <title>Teaching - Hannah Dell</title>
              </Helmet>
              <Teaching />
            </>
          }
        />
        <Route 
          path="/travel" 
          element={
            <>
              <Helmet>
                <title>Travel - Hannah Dell</title>
              </Helmet>
              <Travel />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}