import image1 from '../../../assets/bannar/baked-chicken-breast-9-C4-F43-W-1200x600.jpg'
import image2 from '../../../assets/bannar/meat-burger-with-salad-cheese-tomato-and-ketchup-KRH2-A48-1200x600.jpg'
import image3 from '../../../assets/bannar/raspberry-tartlet-dessert-with-almond-flakes-34Z9TYK-1200x600.jpg'
import image4 from '../../../assets/bannar/homemade-chicken-tikka-masala-AW6-RTJ7-1200x600.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg mt-2">
            <div id="slide1" className="carousel-item relative w-full hero-overlay flex items-center justify-center">
                <img src={image4} className="w-full bl " />
                <div className='absolute text-white space-y-5 w-3/6 mx-auto text-center '>
                    <h2 className='font-extrabold text-6xl'>Chicken Tikka Masala</h2>
                    <p className='text-2xl font-semibold'> A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking. </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;