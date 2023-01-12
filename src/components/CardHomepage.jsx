const CardHomepage = () => {
  return (
    <>
      <div className="card-container ">
        <div className="card-surface-laptop">
          <div className="card-content">
            <img
              src="images/surface-laptop-5.webp
          "
              alt=""
            />
            <a href="/" className="new-label">
              New
            </a>
            <h2>Surface Laptop 5</h2>
            <p>
              Sophisticated style and multitasking speed powered by 12th Gen
              Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform
              make this the perfect gift.
            </p>
            <a href="/" className="shop-btn">
              Shop now <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>

        <div className="card-surface-go">
          <div className="card-content">
            <img src="images/surface-go.png" alt="surface go 3" />
            <h2>Select Surface Go 3, up to $70 off</h2>
            <p>
              Share endless wonder, wherever you are, with the most portable
              Surface touchscreen 2-in-1—perfect for work, play, and beyond.
              Offer ends 1/8.
            </p>
            <a href="/" className="shop-btn">
              Shop Surface Go 3 <i className="fas fa-chevron-right "></i>
            </a>
          </div>
        </div>

        <div className="xbox-series-x">
          <div className="card-content">
            <img src="images/xbox-series-x.png" alt="xbox-series-x" />
            <h2>Unwrap adventure</h2>

            <p>
              Put a bow on next-gen performance with Xbox Series X and Xbox
              Series S.
            </p>
            <a href="/" className="shop-btn">
              Shop Xbox Series X <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>

        <div className="xbox-series-s">
          <div className="card-content">
            <img src="/images/headphones.png " alt="xbox series S" />
            <h2>A sound gift</h2>
            <p>
              From silent nights to party playlists, they’ll never miss a beat
              with premium audio from Surface.
            </p>
            <a href="/" className="shop-btn">
              Shop Surface Earbuds <i className="fas fa-chevron-right"></i>
            </a>{" "}
            <br></br>
            <a href="/" className="shop-btn">
              Shop Surface headphones 2 <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHomepage;
