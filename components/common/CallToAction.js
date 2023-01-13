import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="start-partners bgc-thm pt50 pb50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="start_partner tac-smd">
              <h2>Become a part of us</h2>
              <p>We only work with the best companies around the globe</p>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-4">
            <div className="parner_reg_btn text-right tac-smd">
              <Link href="/register" className="btn btn-thm2">
                Register Now
              </Link>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
