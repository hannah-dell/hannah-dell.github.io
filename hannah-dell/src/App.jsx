import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import Hero from './components/Hero';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Talks from './pages/Talks/Talks';
import Teaching from './pages/Teaching/Teaching';
import Travel from './pages/Travel/Travel';

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
              <HelmetProvider>
                <Helmet>
                  <title>Home - Hannah Dell</title>
                </Helmet>
              </HelmetProvider>
              <Home />
            </>
          }
        />
        <Route 
          path="/talks" 
          element={
            <>
              <HelmetProvider>
                <Helmet>
                  <title>Talks - Hannah Dell</title>
                </Helmet>
              </HelmetProvider>
              <Talks />
            </>
          }
        />
        <Route 
          path="/teaching" 
          element={
            <>
              <HelmetProvider>
                <Helmet>
                  <title>Teaching - Hannah Dell</title>
                </Helmet>
              </HelmetProvider>
              <Teaching />
            </>
          }
        />
        <Route 
          path="/travel" 
          element={
            <>
              <HelmetProvider>
                <Helmet>
                  <title>Travel - Hannah Dell</title>
                </Helmet>
              </HelmetProvider>
              <Travel />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}