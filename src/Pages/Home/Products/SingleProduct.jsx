import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";


const SingleProduct = ({ product }) => {
    return (
        <div className="card w-[410px] rounded-md border-2 bg-base-100 hover:shadow-xl">
            <figure><img src={product.img} className="w-full h-80" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}!</h2>
                <Rating
                    style={{ maxWidth: 120 }}
                    value={product.review_star}
                    readOnly
                />
                <p>{product.description}</p>
                <div className='flex mt-6 gap-2 items-center justify-start'>
                    <img src={product.author_image} className='w-10 h-10 rounded-full border-2 border-slate-200 p-[2px]' alt="" />
                    <p className='font-semibold text-lg text-gray-400'>by <span className='text-black'>{product.author}</span></p>
                </div>
            </div>
            <div className="flex justify-around border-t-2">
                <p className='flex gap-2 items-center'><AiOutlineFolderOpen  className='text-green-600 text-2lg' /><span>{product.name}</span></p>
                <p className="divider h-16 text-center divider-horizontal"></p>
                <p className='flex gap-2 items-center'><AiOutlineClockCircle className='text-green-600 text-lg'  /><span>{product.time}</span></p>
            </div>
        </div>
    );
};

export default SingleProduct;