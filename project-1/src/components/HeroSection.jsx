const HeroSection = () => {
  return (
    <div>
      <div id="pageOne">
        <div className="Hero-Content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH
            OUR SHOES .
          </p>
          <div className="btn">
            <button id="btnOne">Shop Now</button>
            <button id="btnTwo">Catagory</button>
          </div>
          <div className="store">
            <h6>Also Available On</h6>
            <div className="store-logo">
              <img src="../public/Images/flipkart.png" alt="" />
              <img src="../public/Images/amazon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="Hero-Image">
          <img src="../public/Images/hero-image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
