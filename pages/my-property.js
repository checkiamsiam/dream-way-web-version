import { useModal } from "@nextui-org/react";
import { getSession } from "next-auth/react";
import { useState } from "react";
import Seo from "../components/common/seo";
import InstallmentModal from "../components/installmentModal";
import OwnedPropertyCard from "../components/myProperty/OwnedPropertyCard";
import RequestedPropertyCard from "../components/myProperty/RequestedPropertyCard";
import axiosApi from "../features/axiosInstance";

function MyProperty({ myProperty, myRequests }) {
  const [propertyType, setPropertyType] = useState("owned");
  const { setVisible, bindings } = useModal();

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
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="selectpicker show-tick form-select c_select"
                    >
                      <option value={"owned"}>Owned</option>
                      <option value={"requested"}>Requested</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="my_dashboard_review ">
              <div className="favorite_item_list">
                {propertyType === "owned"
                  ? myProperty !== [] &&
                    myProperty.map((property) => <OwnedPropertyCard key={property.id} setVisibleModal={setVisible} property={property} />)
                  : myRequests !== [] && myRequests.map((property) => <RequestedPropertyCard key={property.id} property={property} />)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <InstallmentModal bindings={bindings} />
    </>
  );
}

export default MyProperty;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const token = session?.user?.token?.token;

  // wait for all requests to complete
  const [myProperty, myRequests] = await Promise.all([
    axiosApi.get("/api/clients/getMyProperty", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

    axiosApi.get("/api/clients/getMyRequests", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  ]);

  return {
    props: {
      myProperty: myProperty?.data?.response,
      myRequests: myRequests?.data?.response,
    },
  };
}
