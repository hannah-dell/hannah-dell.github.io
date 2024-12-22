import { useLocation } from "react-router-dom"

export default function Hero() {

  const location = useLocation();
  const heading = location.pathname.split('/')[1]

  const formatHeading = (str) => {
    if (!str) {
      return "Home"
    } 

    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  return (
    <h1>{formatHeading(heading)}</h1>
  )
}
