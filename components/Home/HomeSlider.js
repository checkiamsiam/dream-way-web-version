import Slider from "react-slick";

function HomeSlider() {
  const settings = {
    dots: false,
    arrow: true,
    arrow: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="home-four ">
      <div className="container-fluid p0">
        <div className="main-banner-wrapper">
          <div className="arrow-style-2 banner-style-one ">
            <Slider {...settings} >
              <div className="slide slide-one image-1"></div>
              <div className="slide slide-one image-2"></div>
              <div className="slide slide-one image-1"></div>
            </Slider>
          </div>
        </div>
        {/* <!-- /.main-banner-wrapper --> */}
      </div>
      {/* End .container-fluid */}

      <div className="container home_iconbox_container">
        <div className="row posr">
          <div className="col-lg-12">
            <div className="home_content home4">
              <div className="home-text text-center">
                <h2 className="fz55">Find Your Dream Way</h2>
                <p className="fz18 color-white">Leading Real Estate Company in Bangladesh.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h4 className="text-center color-white fw600 mb25 mb0-520">What are you looking for?</h4>
            <ul className="home4_iconbox mb0">
              <li className="list-inline-item">
                <div className="icon">
                  <span className="flaticon-house"></span>
                  <p>Lands</p>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="icon">
                  <span className="flaticon-building"></span>
                  <p>Flats</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
