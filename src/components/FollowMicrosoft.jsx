const FollowMicrosoft = () => {
  return (
    <div>
      <div className="follow">
        <p>Follow Microsoft</p>
        <ul>
          <li className="facebook">
            <a href="https://www.facebook.com/">
              {" "}
              <i className="fa-brands fa-facebook-f fa-2x"></i>
            </a>
          </li>
          <li className="twitter">
            <a href="https://www.twitter.com/">
              {" "}
              <i className="fa-brands fa-twitter fa-2x"></i>
            </a>
          </li>
          <li className="linkedin">
            <a href="https://www.linkedin.com/in/scottdialo/">
              {" "}
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="back-to-top-container">
        <a href="/" className="back-to-top-btn" id="">
          <i class="fas fa-light fa-arrow-up"></i>Back to top
        </a>
      </div>
    </div>
  );
};

export default FollowMicrosoft;
