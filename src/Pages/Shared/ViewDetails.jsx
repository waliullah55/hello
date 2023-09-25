import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const ViewDetails = () => {
    const loadedData = useLoaderData();
    const { image, name, experience, recipe_details } = loadedData;
    // console.log(loadedData);
    return (
        <div >
            <Helmet><title>Recipe || View Details</title></Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: {image} }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                        <p className="mb-5">Over {experience} years</p>
                        <p className="mb-5">{recipe_details}</p>
                    </div>
                </div>
            </div>
            {/* <div className="hero h-[450px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-12 mx-auto">
                    <img src={image} className="h-[400px] rounded-lg shadow-2xl" />
                    <div className="w-1/2">
                        <h1 className="text-7xl font-bold font-[Caveat] py-3 text-cyan-500">{name}</h1>
                        <p className="text-xl">Over {experience} experience</p>
                        <p className="pt-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    </div>
                </div>
            </div> */}

            <div>
                <h2 className="text-5xl text-center mt-16 mb-12 border-b-4 border-cyan-400 pb-2 w-44 mx-auto">Recipe</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {
                        recipe_details.map(details => <DetailsCard recipe={details} key={details.id}></DetailsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;