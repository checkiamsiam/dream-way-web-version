import Seo from '../components/common/seo';
import NoticeCard from '../components/noticeBoard/NoticeCard';
import axiosApi from '../features/axiosInstance';

function NoticeBoard({ notices }) {
    return (
        <>
            <Seo pageTitle="Notice" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-xl-4 mb10 mt85">
                        <div className="breadcrumb_content style2 mb30-991">
                            <h2 className="breadcrumb_title">Notice Board</h2>
                            <p>See The Latest Update and news.</p>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="my_dashboard_review ">
                            <div className="favorite_item_list">
                                {notices &&
                                    notices.map((notice, i) => (
                                        <NoticeCard key={i} notice={notice} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoticeBoard;

export async function getServerSideProps() {
    const { data } = await axiosApi.get('/api/notice/getGeneralNotices');

    return {
        props: {
            notices: data.notice,
        },
    };
}
