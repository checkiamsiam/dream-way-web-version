import Slider from "react-slick";

function FlatDetailBannerGellary() {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
  };
  return (
    <>
      <div className="container-fluid p0">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-banner-wrapper listing-single-4 home10 banner-style-one arrow-style-2">
              <Slider {...settings} arrows={true}>
                <div className="slide slide-one image-4"></div>
                <div className="slide slide-one image-2"></div>
                <div className="slide slide-one image-4"></div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className="container">
          <div className="row listing_single_row style2">
            <div className="col-md-7 col-lg-7 col-xl-8">
              <div className="single_property_title multicolor_style mt30-767">
                <h2>Renovated apartment</h2>
                <p>Dhanmondi , dhaka</p>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xl-4">
              <div className="multicolor_style text-end tal-767">
                <div className="price">
                  <h2 className="text-white">$13,00000</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlatDetailBannerGellary;
