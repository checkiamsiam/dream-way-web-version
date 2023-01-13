import PropertiesCard from "../common/PropertiesCard";

function FeaturedLands() {
  return (
    <section id="best-property" className="best-property bgc-f7">
      <div className="container ovh">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center mb40">
              <h2>Featured Lands</h2>
              <p>See some Lands thats are very impressive.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <PropertiesCard />
              <PropertiesCard />
              <PropertiesCard />
              <PropertiesCard />
              <PropertiesCard />
              <PropertiesCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedLands;