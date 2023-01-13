import Seo from "../components/common/seo";
import OwnedPropertyCard from "../components/myProperty/OwnedPropertyCard";
import RequestedPropertyCard from "../components/myProperty/RequestedPropertyCard";

function MyProperty() {
  return (
    <>
      <Seo pageTitle="My Property" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt85 row align-items-center">
            <div className="mb10 col-sm-6">
              <div className="breadcrumb_content style2 mb30-991">
                <h2 className="breadcrumb_title">My Property</h2>
                <p>See the status of your owned and requested properties.</p>
              </div>
            </div>
            <div className="mb10 col-sm-6">
              <div className="candidate_revew_select style2 text-end mb30-991">
                <ul className="mb0">
                  <li className="list-inline-item">
                    <select className="selectpicker show-tick form-select c_select">
                      <option>Owned</option>
                      <option>Requested</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="my_dashboard_review ">
              <div className="favorite_item_list">
                <OwnedPropertyCard />
                <RequestedPropertyCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProperty;
