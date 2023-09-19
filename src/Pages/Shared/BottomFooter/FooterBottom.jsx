import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterBottom = () => {
    return (
        <footer className="footer items-center px-12 py-6 bg-slate-800 text-neutral-content">
            <aside className="items-center grid-flow-col">
                <p className="text-gray-400 text-lg ">Copyright © 2023 - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 text-lg pr-8 md:place-self-center md:justify-self-end">
                <Link to={'www.facebook.com'} className="p-[10px] border-gray-600 border hover:bg-[#23A455] hover:text-white rounded-full"><FaSquareFacebook/></Link>
                <Link to={'www.twitter.com'} className="p-[10px] border-gray-600 border hover:bg-[#23A455] hover:text-white rounded-full"><BsTwitter/></Link>
                <Link to={'www.instagram.com'} className="p-[10px] border-gray-600 border hover:bg-[#23A455] hover:text-white rounded-full"><AiFillInstagram/></Link>
                <Link to={'www.youtube.com'} className="p-[10px] border-gray-600 border hover:bg-[#23A455] hover:text-white rounded-full"><BsYoutube/></Link>
            </nav>
        </footer>
    );
};

export default FooterBottom;