import { useEffect, useState } from "react";
import SectionTittle from "../../../hooks/SectionTittle";
import SingleChef from "../SingleChef/SingleChef";

const Chefs = () => {
    const [Chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                // console.log(data);
            })
            .catch(err => console.error(err))
    }, []);
    return (

        <div >
            <SectionTittle subTitle={"What Our Chefs Cookin"} title={"Topper Chefs"}></SectionTittle>
            <div className="grid md:grid-cols-3 gap-8 gap-y-12">
                {
                    Chefs.map(Chef => <SingleChef key={Chef.id} chef={Chef}></SingleChef>)
                }
            </div>
        </div>

    );
};

export default Chefs;