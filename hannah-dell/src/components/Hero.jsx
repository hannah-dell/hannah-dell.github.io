import { useLocation } from "react-router-dom"

import data from "../data/pages.json";

export default function Hero() {

  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const pageData = data.find(page => page.path === path);
  
  return (
    pageData && <div className="hero">
      <div className="body-container">
        <h1>{pageData.name}</h1>
      </div>
    </div>
  )
}
