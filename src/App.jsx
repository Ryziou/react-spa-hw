const navbarTitle = 'My Site';
const heroHeading = 'Welcome to My Site';
const mainParagraphs = [
  'This is the first paragraph of the main content.',
  'Here is another bit of content to display on the page.',
  'You can keep adding more text as needed!'
]
const footerText = '© 2025 My Site. All rights reserved.';

function App() {

  return (
    <>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <a className="navbar-item" href="#">
              {navbarTitle}
            </a>
          </a>
        </div>
      </nav>
      <section className="hero is-info is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">
              {heroHeading}
            </h1>
          </div>
        </div>
      </section>
      <main className="section">
        <div className="container has-text-centered has-text-weight-bold">
          {mainParagraphs.map((main, index) => 
            <p key={index} className="notification is-warning">{main}</p>
          )}
        </div>
      </main>
      <footer className="footer">
        <div className="content has-text-centered">
          <p className="title is-6 has-text-weight-light">{footerText}</p>
        </div>
      </footer>
    </>
  )
}

export default App
