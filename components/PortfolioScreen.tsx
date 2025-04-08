export default function PortfolioScreen () {
  return (
    <div className="container position-relative portfolio-screen screen view pt-5 mt-5">
      <div className="blue-ball" />
      <div className="orange-ball" />
      <div className="row portfolio-container">
        <div className="col-6">
          <div>
            <img className="w-100 rounded-3" src="/images/portfolio/mecha.png" alt="Portfolio" />
          </div>
          <h3 className="c-dodger">Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec a diam lectus. Sed sit amet ipsum mauris.
          </p>
        </div>

        <div className="col-6 position-absolute" style={{ top: '50%', right: 0, transform: 'translateY(-50%)' }}>
          <div>
            <img className="w-100 rounded-3" src="/images/portfolio/inamco.png" alt="Portfolio" />
          </div>
          <h3 className="c-dodger">Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec a diam lectus. Sed sit amet ipsum mauris.
          </p>
        </div>
      </div>
    </div>
  );
}
