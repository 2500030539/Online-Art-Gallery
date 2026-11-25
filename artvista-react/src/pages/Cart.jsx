import React from "react";

function Gallery() {

  const artworks = [
    {
      id: 1,
      name: "Colorful Abstract",
      artist: "Sophia Williams",
      price: "₹2,500",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600"
    },
    {
      id: 2,
      name: "Modern Art",
      artist: "James Anderson",
      price: "₹3,200",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600"
    },
    {
      id: 3,
      name: "Abstract Dreams",
      artist: "Emma Johnson",
      price: "₹4,000",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600"
    },
    {
      id: 4,
      name: "Nature's Beauty",
      artist: "Olivia Smith",
      price: "₹2,800",
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=600"
    },
    {
      id: 5,
      name: "Creative World",
      artist: "Daniel Brown",
      price: "₹3,500",
      image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600"
    },
    {
      id: 6,
      name: "Beautiful Colors",
      artist: "Isabella Davis",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600"
    }
  ];

  return (
    <div className="gallery-page">

      <div className="gallery-heading">
        <h1>Explore Our Art Gallery</h1>
        <p>
          Discover beautiful artworks created by talented artists.
        </p>
      </div>

      <div className="gallery-grid">

        {artworks.map((art) => (

          <div className="gallery-card" key={art.id}>

            <img src={art.image} alt={art.name} />

            <div className="gallery-info">

              <h3>{art.name}</h3>

              <p>By {art.artist}</p>

              <h4>{art.price}</h4>

              <button
                className="gallery-btn"
                onClick={() => alert(art.name + " selected!")}
              >
                View Artwork
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Gallery;