import { FaFacebook } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

interface IProps {
    youtube?: string;
    tiktok?: string;
    udemy?: string;
    facebook?: string;
}
const SocialMedia = (props: IProps) => {
    const { youtube, tiktok, udemy, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={youtube} target='_blank' className="highlight" title="Youtube Phạm Đức Bình">
                <SiYoutubeshorts size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Phạm Đức Bình">
                <FaTiktok size={30} />
            </a>
            <a href={udemy} target='_blank' className="highlight" title="Udemy Phạm Đức Bình">
                <SiUdemy size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Phạm Đức Bình">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;