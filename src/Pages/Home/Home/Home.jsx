
import Chefs from '../Chefs/Chefs';
import Banner from './../Banner/Banner';
import Category from './../Category/Category';
import Products from './../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Chefs></Chefs>
            <Products></Products>
        </div>
    );
};

export default Home;