
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';
import Footer from '../Pages/Shared/Footer/Footer';
import FooterBottom from '../Pages/Shared/BottomFooter/FooterBottom';
const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Main;