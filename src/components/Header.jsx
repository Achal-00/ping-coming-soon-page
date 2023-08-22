const Header = () => {
  return (
    <section className="header">
      <div className="logo-holder">
        <img src="images/logo.svg" alt="logo" />
      </div>
      <div className="heading">
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <p>Subscribe and get notified</p>
      </div>
      <div className="newsletter">
        <div className="input">
          <input type="text" placeholder="Your email address..." />
          <p>Please provide a valid email address</p>
        </div>
        <div className="btn">
          <button>Notify Me</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
