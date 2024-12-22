import { useLocation } from "react-router-dom"

export default function Hero(props) {

  const location = useLocation();
  const heading = location.pathname.split('/')[1];

  const formatHeading = (str) => {
    if (!str) {
      return props.homeName;
    } 

    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  return (
    <div className="hero">
      <h1>{formatHeading(heading)}</h1>
    </div>
  )
}
