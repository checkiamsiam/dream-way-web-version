import Image from 'next/image';
import Link from 'next/link';
import { convertStringToArray } from '../common/utilityFunctions';
function RequestedPropertyCard({ property }) {
    let status;
    switch (property.r_status) {
        case 0:
            status = 'Pending';
            break;
        case 1:
            status = 'Accepted';
            break;
        case 2:
            status = 'Rejected';
            break;
        case 3:
            status = 'Delivered';
            break;
        case 4:
            status = 'Canceled';
            break;
        default:
            break;
    }

    return (
        <div className="feat_property list favorite_page">
            <div className="thumb">
                <Image
                    className="img-whp cover w-auto h-auto"
                    src={`https://dreamwayapi.sajidurapp.xyz/${
                        convertStringToArray(property?.property?.img_url)[0]
                    }`}
                    alt="fp1.jpg"
                    width={360}
                    height={240}
                />
            </div>
            {/* End .thumb */}
            <div className="details">
                <div className="tc_content">
                    <h4>
                        {' '}
                        <Link href="">{property?.property?.title}</Link>
                    </h4>
                    <p>
                        <span className="flaticon-placeholder"></span>{' '}
                        {property?.property?.address}
                    </p>
                    <p>Admin Comments: {property?.admin_comments}</p>
                </div>
            </div>
            {/* End details */}
            <span className="status_tag badge mr10 mt50">{status}</span>
            <br />

            <a className="fp_price text-thm mt50 px-10" href="#">
                {property?.property?.price || property?.property?.regular_price}{' '}
                BDT
            </a>
            {/* view_edit_delete_list */}
        </div>
    );
}

export default RequestedPropertyCard;
