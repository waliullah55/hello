// import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdFavorite } from "react-icons/md";


const DetailsCard = ({ recipe }) => {
    const { img, decs, recipe_name, recipe_elements } = recipe;
    const [favorite, setFavorite] = useState(true);
    const handleFavorite = () => {
        toast.success("Wow so easy!");
        setFavorite(false);
    }

    return (
        <div className="max-w-md p-6 rounded-md shadow-lg dark:bg-gray-900 dark:text-gray-50">
            <Toaster />
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2 flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracki">{recipe_name}</h2>
                <button disabled={!favorite} onClick={handleFavorite} className='text-2xl'>
                    <MdFavorite className={favorite ? 'text-2xl shadow-2xl text-slate-400' : 'text-2xl shadow-2xl text-red-600'}/></button>
                {/* <Rating style={{ maxWidth: 100 }} readOnly value={rating} /> */}
            </div>
            <p className="dark:text-gray-100">{decs}</p>
            <h2 className='text-2xl font-medium my-2 pt-2'>Ingredients:</h2>
            {
                recipe_elements.map((element, index) =>
                    <p key={index}>{index + 1}. {element}</p>
                )
            }
        </div>
    );
};

export default DetailsCard;