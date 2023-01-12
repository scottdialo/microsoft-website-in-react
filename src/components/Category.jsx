export const Category = () => {
  return (
    <>
      <div className="category-wrapper">
        <div className="surface-device">
          <img src="images/surface-icon.png" alt="surface-tablet" />
          <a href="/">Shop Surface devices</a>
        </div>
        <div className="xbox">
          <img src="images/xbox-icon.png" alt="xbox" />
          <a href="/">Buy Xbox games and consoles</a>
        </div>
        <div className="microsoft365">
          <img src="images/windows-icon.png" alt="windows icon" />
          <a href="/">Choose your Microsoft 365</a>
        </div>
        <div className="windows11">
          <img src="images/windows-icon.png" alt="" />
          <a href="/">Get Windows 11</a>
        </div>
        <div className="accessories">
          <img src="images/accessory-icon.png" alt="accessory icon" />
          <a href="/">Shop for accessories</a>
        </div>
        <div className="shop-for-business">
          <img src="images/suitcase-icon.png" alt="business suitcase" />
          <a href="/"> Shop Business</a>
        </div>
      </div>
    </>
  );
};
