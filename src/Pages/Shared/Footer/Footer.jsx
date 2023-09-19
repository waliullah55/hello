import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-gray-400 text-lg hover:white">
      <form>
        <header className="footer-title text-xl">Subscribe</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-gray-400 text-lg leading-6 -mt-3">Register and get notified about all the news & updates before it gets too late.</span>
          </label>
          <div className="relative mt-3">
            <input type="text" placeholder="Enter Your Email Address" className="input input-bordered bg-slate-700 w-full pr-16" />
            <button className="btn btn-warning bg-[#F89223] border-[#F89223] text-white absolute top-0 right-0 rounded-l-none">Sign Up</button>
          </div>
        </fieldset>
      </form>
      <nav className=" px-[120px]">
        <header className="footer-title text-xl">Explore</header>
        <a className="link link-hover">Browse Recipes</a>
        <a className="link link-hover">Submit a Recipe</a>
        <a className="link link-hover">Latest News</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <header className="footer-title text-xl">Contact</header>
        <div className="flex gap-2 items-center">
          <HiLocationMarker className="text-[#F89223] text-xl" />
          <div className="flex flex-col">
            <a className="link link-hover">787 Mark View Street,</a>
            <a className="link link-hover">New Town, California</a>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <GrMail className="text-[#F89223]" />
          <a className="link link-hover">needhelp@thatix.com</a>
        </div>
        <div className="flex gap-2 items-center">
          <IoCall className="text-[#F89223] flex flex-row-reverse" />
          <a className="link link-hover">666 888 0000
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;