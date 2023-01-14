import { useDispatch } from "react-redux";
import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBannerForFlatPage = () => {
  const dispatch = useDispatch()
  return (
    <section className="inner_page_breadcrumb ">
      <div className="container">
        <div className="row">
          <div>
            <div className="breadcrumb_content">
              <BreadCrumb title="Flats" />
              <h4 className="breadcrumb_title">Flats</h4>
              <form>
                <div className="d-flex justify-content-center align-items-center gap-2 mt15">
                  <div className="form-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Flats..."
                    />
                  </div>
                  <div className="search_option_button">
                    <input value="Search" type="submit" className="btn btn-thm py-2 px-4"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBannerForFlatPage;
