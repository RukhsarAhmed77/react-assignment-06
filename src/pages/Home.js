const Home = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to NextGen Store</h1>
          <p className="hero-subtitle">
            Discover cutting-edge tech at unbeatable prices
          </p>
          <div className="cta-buttons">
            <Link to="/products" className="cta-btn">
              Shop Now
            </Link>
            <Link to="/login" className="cta-btn outline">
              Member Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;