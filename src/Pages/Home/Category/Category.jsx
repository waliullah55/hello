import { useEffect } from "react";
import { useState } from "react";
import SectionTittle from "../../../hooks/SectionTittle";


const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(error => console.error(error))
    }, []);
    return (

        <div className="my-16">
            <SectionTittle subTitle={"Choose a Category"} title={"Recipe Categories"}></SectionTittle>
            <div className="flex gap-6">
                {
                    category.map(data => <div
                        key={data.id}
                        className=""
                    >
                        <img src={data.img} className="rounded-full border-[4px] border-slate-300 p-2" alt="" />
                        <h2 className="mt-4 text-center text-xl font-semibold">{data.name}</h2>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Category;