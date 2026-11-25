
import React, { useState } from "react";

function Artwork() {

  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const artworks = [
    {
      id: 1,
      title: "Beautiful Landscape",
      artist: "John Smith",
      price: "₹2,500",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600"
    },
    {
      id: 2,
      title: "Abstract Colors",
      artist: "Sarah Wilson",
      price: "₹3,000",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600"
    },
    {
      id: 3,
      title: "Modern Painting",
      artist: "David Miller",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600"
    },
    {
      id: 4,
      title: "Colorful Art",
      artist: "Emma Brown",
      price: "₹3,500",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600"
    },
    {
      id: 5,
      title: "Nature Painting",
      artist: "Robert Green",
      price: "₹5,000",
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=600"
    },
    {
      id: 6,
      title: "Creative Artwork",
      artist: "Sophia Davis",
      price: "₹4,000",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600"
    }
  ];

  return (
    <div className="artwork-page">

      <section className="artwork-heading">
        <h1>Discover Beautiful Artworks</h1>
        <p>
          Explore unique paintings and creative masterpieces
          from talented artists.
        </p>
      </section>

      <section className="artwork-container">

        <div className="artwork-grid">

          {artworks.map((art) => (
            <div className="artwork-card" key={art.id}>

              <img src={art.image} alt={art.title} />

              <div className="artwork-info">
                <h3>{art.title}</h3>
                <p>By {art.artist}</p>
                <h4>{art.price}</h4>

                <button
                  type="button"
                  onClick={() => setSelectedArtwork(art)}
                >
                  View Artwork
                </button>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Artwork Details Popup */}

      {selectedArtwork && (

        <div className="artwork-modal">

          <div className="artwork-modal-content">

            <button
              className="close-btn"
              onClick={() => setSelectedArtwork(null)}
              type="button"
              aria-label="Close artwork details"
            >
              ✕
            </button>

            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
            />

            <div className="modal-info">

              <h2>{selectedArtwork.title}</h2>

              <p>
                Artist: {selectedArtwork.artist}
              </p>

              <h3>
                Price: {selectedArtwork.price}
              </h3>

              <p>
                Explore this beautiful artwork from our
                exclusive art collection.
              </p>

              <button
                type="button"
                onClick={() => setSelectedArtwork(null)}
              >
                Continue Exploring
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Artwork;
