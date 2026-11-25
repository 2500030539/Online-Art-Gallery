
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO ARTVISTA</p>

          <h1>
            Discover the World
            <br />
            Through <span>Art</span>
          </h1>

          <p>
            Explore beautiful paintings, creative masterpieces
            and unique artworks from talented artists.
          </p>

          <Link to="/gallery" className="explore-btn">
            Explore Gallery
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
            alt="Beautiful artwork"
          />
        </div>
      </section>

      {/* Featured Artwork */}
      <section className="featured-section">
        <h2>Featured Artwork</h2>
        <p>Discover art that inspires you.</p>

        <div className="artwork-grid">

          <div className="art-card">
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342"
              alt="Abstract painting"
            />
            <h3>Abstract Beauty</h3>
            <p>Modern Art</p>
          </div>

          <div className="art-card">
            <img
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9"
              alt="Classic painting"
            />
            <h3>Classic Masterpiece</h3>
            <p>Traditional Art</p>
          </div>

          <div className="art-card">
            <img
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262"
              alt="Colorful artwork"
            />
            <h3>Colorful Dreams</h3>
            <p>Contemporary Art</p>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="home-about">
        <h2>Art Has No Boundaries</h2>
        <p>
          ArtVista is a place where creativity meets imagination.
          Discover unique artworks, explore talented artists
          and find paintings that speak to your heart.
        </p>

        <Link to="/about" className="about-btn">
          Learn More
        </Link>
      </section>

    </div>
  );
}

export default Home;
