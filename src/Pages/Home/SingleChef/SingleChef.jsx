import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const SingleChef = ({ chef }) => {
    const { id, image, name, like, experience, recipe_quantity } = chef;
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 space-y-4"
            key={chef.id}
        >
            <a href="#">
                <img className="rounded-t-lg h-[410px] w-full" src={image} alt="" />
            </a>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl">{name}</h3>
                <p className="flex gap-1  text-lg"><span className="text-[#5bc4de] text-2xl">< BiSolidLike /></span>{like}</p>
            </div>
            <div className="flex items-center justify-between pb-3">
                <h3 className="text-lg">Over {experience} Years</h3>
                <h3 className="text-lg">{recipe_quantity} Recipes</h3>
            </div>
            <Link to={`viewDetails/${id}`}><button
                className="bg-[#5bc4de] w-full py-3 rounded-xl text-white text-xl hover:bg-[#15bfe8]"
            >View Details</button></Link>
        </div>
    );
};

export default SingleChef;