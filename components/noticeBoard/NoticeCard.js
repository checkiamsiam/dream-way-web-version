import Image from "next/image";
import Link from "next/link";
import notificationBell from "../../public/assets/fonts/image/bell.png";

const NoticeCard = ({ notice }) => {
  return (
    <div className="feat_property list favorite_page row">
      <div className="d-flex justify-content-center align-items-center gap-3 col-md-2 ">
        <Image className="img-whp cover h-auto w-auto p20" src={notificationBell} alt="fp1.jpg" />
      </div>
      {/* End .thumb */}

      <div className="details col-md-10">
        <div className="tc_content">
          <h4>
            {" "}
            <Link href="">{notice?.title}</Link>
          </h4>
          <p>{notice?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
