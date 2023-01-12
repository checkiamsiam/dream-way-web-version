import Image from "next/image";
import heroImg from "../../public/assets/images/about/youtube-thump-why.png";

function AboutUs() {
  return (
    <div className="container">
      <div className="row mt30">
        <div className="col-lg-6 offset-lg-3">
          <div className="main-title text-center">
            <h2>About Us</h2>
            <p>We are leading Real Estate Company in Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-5 col-xl-5">
          <div className="about_thumb">
            <Image className="img-fluid h400 w100" src={heroImg} alt="yt-thump" />
          </div>
        </div>
        <div className="col-lg-7 col-xl-7">
          <div className="about_content">
            <p>
            The housing industry occupies a special place in the development of the modern world, as a result, the housing industry is given a special status as the first line of business in the current world. The adoption of the housing industry in the developed world is as high as it is in our country. Where the biggest obstacle is the inefficiency of the entrepreneurs of this industry and the greedy attitude of some unscrupulous businessmen. Dreamway Properties Limited has stepped out of the traditional line and entered the housing industry with a special line to gain the confidence of investors. In an equation, it can be seen that some people who know themselves get together and buy land and then build buildings and later get their own land and flats through lottery. But even there, many people are not familiar with it and cannot buy it despite the demand, so we Dreamway Properties Ltd. are giving you the opportunity to build a flat according to your choice by buying land in shares at 50% less cost through group buying method. After checking the documents and booking the land shares, all the owners will go to the register office and pay the land price and get the sub-commission deed. After that, a purchase and construction committee will be formed between Dreamway Properties Limited and the owners with the consent of all. There is facility of paying the construction cost in installments, and this entire process will be looked after with great efficiency and 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
