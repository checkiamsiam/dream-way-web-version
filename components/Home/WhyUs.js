import Image from "next/image";
import PopupVideo from "../common/PopupVideo";
import thump from '../../public/assets/images/about/youtube-thump-why.png'

function WhyUs() {
  return (
    <>
      <div className="container py-5">

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-8 col-xl-7">
            <div className="about_content">
            <h2>Why Us</h2>
            <hr />
              <p className="large">
                The housing industry occupies a special place in the development of the modern world, as a result, the housing industry is given a
                special status as the first line of business in the current world
              </p>
              <p>
                The adoption of the housing industry in the developed world is as high as it is in our country. Where the biggest obstacle is the
                inefficiency of the entrepreneurs of this industry and the greedy attitude of some unscrupulous businessmen. Dreamway Properties
                Limited has stepped out of the traditional line and entered the housing industry with a special line to gain the confidence of
                investors. In an equation, it can be seen that some people who know themselves get together and buy land and then build buildings and
                later get their own land and flats through lottery. But even there, many people are not familiar with it and cannot buy it despite the
                demand, so we Dreamway Properties Ltd.
              </p>
              <p>
                are giving you the opportunity to build a flat according to your choice by buying land in shares at 50% less cost through group buying
                method. After checking the documents and booking the land shares, all the owners will go to the register office and pay the land price
                and get the sub-commission deed. After that, a purchase and construction committee will be formed between Dreamway Properties Limited
                and the owners with the consent of all. There is facility of paying the construction cost in installments, and this entire process
                will be looked after with great efficiency and dedication by Dreamway Properties Limited, trust us to fulfill your dream.
              </p>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-4 col-xl-5">
            <div className="about_thumb">
              <Image className="img-fluid w100" src={thump} alt="yt-thump" />
              <PopupVideo videoId="Eq8sPOuaENM" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
