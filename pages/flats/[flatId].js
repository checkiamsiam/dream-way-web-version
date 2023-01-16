// import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Seo from "../../components/common/seo";
import DetailContent from "../../components/flats/Flatdetails/DetailContent";
import FlatDetailBannerGellary from "../../components/flats/Flatdetails/FlatDetailBannerGellary";
import { useGetFlatDetailQuery } from "../../features/flat/flatApi";
// import axiosApi from "../../features/axiosInstance";

function FlatDetails() {
  const router = useRouter();
  const { isLoading, data, isError } = useGetFlatDetailQuery(router?.query?.flatId);
  const flat = data?.response[0];
  console.log(flat);

  return (
    <>
      <Seo pageTitle="Flat Details" />
      <FlatDetailBannerGellary flat={flat} />
      <DetailContent flat={flat} />
    </>
  );
}

export default FlatDetails;

// export async function getServerSideProps(cxt) {
//   const id = cxt.query.flatId;
//   const { data } = await axiosApi.get(`/api/flat/${id}`);
//   return {
//     props: {
//       flat: data?.response[0],
//     },
//   };
// }
