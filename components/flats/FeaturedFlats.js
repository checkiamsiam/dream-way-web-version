import PropertiesCard from "../common/PropertiesCard";

function FeaturedFlats({ flats }) {
  return (
    <section id="best-property" className="best-property bgc-f7">
      <div className="container ovh">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center mb40">
              <h2>Featured Flats</h2>
              <p>Here is Showing some flats thats are on trending now.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {flats && flats.map((flat, i) => (
                <PropertiesCard key={i} property={flat} type="Flat" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFlats;
