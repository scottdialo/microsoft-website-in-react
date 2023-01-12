export const ForBusiness = () => {
  return (
    <>
      <h1 className="for-business-title">For business</h1>
      <div className="forBusiness-container">
        <div className="surface-business">
          <img src="images/surface-business.png" alt="surface for business" />
          <a href="/" className="new-label">
            New
          </a>
          <h2>Surface Pro 9 for Business</h2>
          <p>
            Empower flexible, all day impact with tablet portability and laptop
            performance. Questions? Book an online consultation.
          </p>
          <a href="/" className="shop-btn">
            Shop now <i className="fas fa-chevron-right"></i>
          </a>
          <a href="/" className="shop-btn">
            Book a consultation <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <div className="microsoft-teams">
          <img src="images/microsoft-teams.png " alt="microsoft teams" />
          <h2>Get Microsoft Teams for free</h2>
          <p>
            Online meetings, chat and shared cloud storage -- all in one place.
          </p>
          <a href="/" className="shop-btn">
            Sign up for free <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <div className="365cloud">
          <img src="images/365cloud.png" alt="microsoft 365 cloud" />
          <h2>Welcome to your Windows 365 Cloud PC</h2>
          <p>
            Securely stream your windows experience from the Microsoft cloud to
            any device.
          </p>
          <a href="/" className="shop-btn">
            Get it today <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <div className="microsoft-hybrid">
          <img src="images/microsoft-hybrid.png" alt="microsoft hybrid" />
          <h2>Thrive in a hybrid world</h2>
          <p>
            Discover tools, resources, and strategies to help your employees
            succeed in the new world of flexible work.
          </p>
          <a href="/" className="shop-btn">
            Learn more <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};
