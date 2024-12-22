import headings from '../data/pages.json';

export default function Navbar() {

  const homeName = "Hannah Dell"

  const headingNames = (
    <ul className="hidden md:flex">
      {headings.map(heading => (
        <li key={heading.id} className="px-2">
          <a 
            href={`${heading.name.toLowerCase()}`}
            className="text-headingYellow hover:text-hoverYellow transition duration-300"
          >
            {heading.name}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <nav className="w-full bg-navbarBackground shadow-md py-4">
      <div className="container mx-auto flex items-center">
        <div className="text-lg text-headingYellow hover:text-hoverYellow transition duration-300 pr-4">
          <a href = "/">
            {homeName}
          </a>
        </div>
        {headingNames}
      </div>
    </nav>
  )
}