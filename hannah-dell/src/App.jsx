import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import Hero from './components/Hero';
import Home from './pages/Home/Home';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Research from './pages/Research/Research';
import Talks from './pages/Talks/Talks';
import Teaching from './pages/Teaching/Teaching';
import Travel from './pages/Travel/Travel';

import data from './data/pages.json';

export default function App() {

  const regularPages = data.filter(page => !page.isSpecialPage);

  const specialPageNames = ["Home", "Talks", "Teaching", "Travel", "Research"]

  const specialPages = specialPageNames.reduce((acc, pageName) => {
    const pageData = data.find((page) => page.name === pageName);
    if (pageData) {
      acc[pageName.toLowerCase()] = pageData;
    }
    return acc;
  }, {});

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route
          path={`/${specialPages.home.path}`}
          element={
            <>
              <HelmetProvider>
                <Helmet>
                  <title>{specialPages.home.name} - Hannah Dell</title>
                </Helmet>
              </HelmetProvider>
              <Home name={specialPages.home.name}/>
            </>
          }
        />
        <Route 
          path={`/${specialPages.talks.path}`} 
          element={
            <>
              <HelmetProvider>
                <Helmet>
                  <title>{specialPages.talks.name} - Hannah Dell</title>
                </Helmet>
              </HelmetProvider>
              <Talks name={specialPages.talks.name}/>
            </>
          }
        />
        <Route 
          path={`/${specialPages.teaching.path}`}
          element={
            <>
              <HelmetProvider>
                <Helmet>
                  <title>{specialPages.teaching.name} - Hannah Dell</title>
                </Helmet>
              </HelmetProvider>
              <Teaching name={specialPages.teaching.name}/>
            </>
          }
        />
        <Route 
          path={`/${specialPages.travel.path}`}
          element={
            <>
              <HelmetProvider>
                <Helmet>
                  <title>{specialPages.travel.name} - Hannah Dell</title>
                </Helmet>
              </HelmetProvider>
              <Travel name={specialPages.travel.name}/>
            </>
          }
        />
        <Route 
          path={`/${specialPages.research.path}`}
          element={
            <>
              <HelmetProvider>
                <Helmet>
                  <title>{specialPages.research.name} - Hannah Dell</title>
                </Helmet>
              </HelmetProvider>
              <Research name={specialPages.research.name}/>
            </>
          }
        />

        {/* Non-special pages with generic layout generated via json. */}
        {regularPages.map(page => (
          <Route
            path={page.path}
            key={page.id}
            element={
              <>

                <HelmetProvider>
                  <Helmet>
                    <title>{page.name} - Hannah Dell</title>
                  </Helmet>
                </HelmetProvider>
                <Intro name={page.name}/>
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}