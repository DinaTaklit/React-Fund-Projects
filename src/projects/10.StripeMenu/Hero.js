
import phoneImg from './images/phone.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h2>
            Payments infrastructure <br />
            for the internet
          </h2>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt="phone" className='phone-img'/>
        </article>
      </div>
    </section>
  )
}

export default Hero