import Review from './Review'
import './index.scss'

function Index() {
  return (
    <div className="reviews">
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review/>
        </section>
      </main>
    </div>
  );
}

export default Index;