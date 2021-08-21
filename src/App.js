import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="lg">
      <div className="App clear">
        {/* This is header block */}

        <header>
          <div className="left-navbar">
            <ul>
              <li>Shop All</li>
              <li>Save on Sets</li>
              <li>Plastic Offsets</li>
            </ul>
          </div>
          <div className="center-navbar">RowdyKG</div>
          <div className="right-navbar">
            <ul>
              <li>Free Shipping</li>
              <li>Account</li>
              <li>Cart</li>
            </ul>
          </div>
        </header>
        {/* This is header block */}

        {/* hero block */}
        <div className="hero">
          <div className="hero-inner d-flex">
            <h2 className="hero-top">
              Our best-selling refillable deodorant, in a new scent for summer.
              <br />
              Shop Lemongrass
            </h2>

            <Button className="hero-button" variant="contained">
              Default
            </Button>
          </div>
        </div>
        {/* hero block */}

        {/* border */}
        <div className="hero-border"></div>
        {/* border */}

        <div className="description">
          <h2>Designed to reduce single-use</h2>
          <h2>plastic waste in your daily routine. </h2>
          <h2>Scientifically-proven to perform.</h2>
        </div>
      </div>
    </Container>
  );
}

export default App;
