const pageTitle = 'My Site';

export default function Navbar({ links }){
  
  // All JSX goes inside of the return statement of a functional component
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          {pageTitle}
        </a>
        <ul>
          {links.map((item, index) => {
            return <a key={index} href="#">{item}</a>
          })}
        </ul>
      </div>
    </nav>
  )
}