import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Welcome to Andrew Koller's project portfolio page using Contentful
            CMS. Enjoy!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browswer" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
