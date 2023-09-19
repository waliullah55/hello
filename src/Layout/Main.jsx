
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';
import Banner from '../Pages/Home/Banner/Banner';
import Category from '../Pages/Home/Category/category';
import Products from '../Pages/Home/Products/Products';
const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Banner></Banner>
            <Category></Category>
            <Products></Products>
        </div>
    );
};

export default Main;