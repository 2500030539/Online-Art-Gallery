const artists = [
  {
    name: "John Smith",
    specialty: "Landscape Artist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    bio: "John creates beautiful landscape paintings inspired by nature."
  },
  {
    name: "Sarah Wilson",
    specialty: "Abstract Artist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    bio: "Sarah creates colorful abstract paintings full of emotion."
  },
  {
    name: "David Miller",
    specialty: "Modern Artist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    bio: "David specializes in modern and contemporary artwork."
  }
];

function Artists() {
  return (
    <div className="artists-page">
      <section className="page-banner">
        <h1>Meet Our Talented Artists</h1>
        <p>Discover the creative minds behind our beautiful artworks.</p>
      </section>

      <section className="artists-grid">
        {artists.map((artist, index) => (
          <div className="artist-card" key={index}>
            <img src={artist.image} alt={artist.name} />
            <div className="artist-info">
              <h2>{artist.name}</h2>
              <h4>{artist.specialty}</h4>
              <p>{artist.bio}</p>
              <button>View Artworks</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Artists;