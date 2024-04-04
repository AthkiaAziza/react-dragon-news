import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Find Us On</h2>
                <div>
                    <a className="p-2 border-2 rounded-t-lg flex items-center gap-2 text-lg" href="">
                        <FaFacebook></FaFacebook>
                        <span>Facebook</span>
                    </a>
                    <a className="p-2 border-x-2 flex items-center gap-2 text-lg" href="">
                        <FaTwitter></FaTwitter>
                        <span>Twitter</span>
                    </a>
                    <a className="p-2 border-2 rounded-b-lg flex items-center gap-2 text-lg" href="">
                        <FaInstagram></FaInstagram>
                        <span>Instagram</span>
                    </a>
                </div>
                {/* q-zone */}
                <div className="p-4 space-y-3 mb-6">
                    <h2 className="text-3xl">Q Zone</h2>
                    <div className="bg-slate-200 p-2">
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;