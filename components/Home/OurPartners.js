function OurPartners() {
  const partnersImages = ["1", "2", "3", "4", "5"];
  return (
    <section id="our-partners" className="our-partners">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center">
              <h2>Our Partners</h2>
              <p>We only work with the best companies around the globe</p>
            </div>
          </div>
        </div>
        <div className="row">
          {partnersImages.map((val, i) => (
            <div className="col-sm-6 col-md-4 col-lg" key={i}>
              <div className="our_partner">
                <img className="img-fluid" src={`assets/images/partners/${val}.png`} alt="1.png" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
