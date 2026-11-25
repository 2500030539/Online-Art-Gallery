function Gallery() {

  const artworks = [
    {
      id: 1,
      name: "Beautiful Landscape",
      artist: "John Smith",
      price: "₹2,500",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    },
    {
      id: 2,
      name: "Abstract Colors",
      artist: "Sarah Wilson",
      price: "₹3,000",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262"
    },
    {
      id: 3,
      name: "Modern Painting",
      artist: "David Miller",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
    },
    {
      id: 4,
      name: "Nature's Beauty",
      artist: "Emma Brown",
      price: "₹2,000",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
      id: 5,
      name: "Creative Artwork",
      artist: "Olivia James",
      price: "₹3,500",
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342"
    },
    {
      id: 6,
      name: "Classic Art",
      artist: "Michael Davis",
      price: "₹5,000",
      image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9"
    }
  ];

  return (
    <div className="gallery-page">

      <div className="gallery-header">
        <h1>Explore Our Art Gallery</h1>
        <p>
          Discover beautiful artworks created by talented artists.
          Find the perfect artwork for your space.
        </p>
      </div>

      <div className="gallery-grid">

        {artworks.map((art) => (

          <div className="gallery-card" key={art.id}>

            <img
              src={art.image}
              alt={art.name}
            />

            <div className="gallery-card-content">

              <h3>{art.name}</h3>

              <p>By {art.artist}</p>

              <h4>{art.price}</h4>

              <button className="gallery-btn">
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