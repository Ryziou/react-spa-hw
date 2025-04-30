const heroHeading = 'Your profile';

export default function Hero(){
  return (
    <section className="hero is-info is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            {heroHeading}
          </h1>
        </div>
      </div>
    </section>
  )
}