import { useState } from "react";

const Header = () => {
  const [email, setEmail] = useState("");

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function btnHandler() {
    if (email === "" || !email.match(validRegex)) {
      document.querySelector(".newsletter input").style.border =
        "thin solid var(--light-red)";
      document.querySelector(".newsletter p").style.display = "block";
    } else {
      document.querySelector(".newsletter input").style.border =
        "thin solid green";
      document.querySelector(".newsletter p").style.display = "block";
      document.querySelector(".newsletter p").style.color = "green";
      document.querySelector(".newsletter p").textContent =
        "Thanks for subscribing!";
    }
  }

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
          <input
            type="text"
            placeholder="Your email address..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Please provide a valid email address</p>
        </div>
        <div className="btn">
          <button onClick={btnHandler}>Notify Me</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
