import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Helmet } from 'react-helmet';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .then(err => console.log(err))
  }
  const navOptions = <>
    <li><Link>Home</Link></li>
    <li><Link>About</Link></li>
    <li><Link to={"/secret"}>Secret</Link></li>
    <li><Link>Contact</Link></li>
    {/* <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button> */}

  </>
// console.log(user?.auth.email);
  return (
    <>
      <Helmet>
        <title>Recipe | Login</title>
      </Helmet>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg font-semibold px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">

          <div className="tooltip tooltip-open" data-tip={user}>
            {
              user ? <><li><Link onClick={handleLogOut}>Log Out</Link></li></> :
                <>
                  <li><Link to={"login"}>Login</Link></li>
                </>
            }
          </div>

        </div>
      </div>
    </>
  );
};

export default Navber;