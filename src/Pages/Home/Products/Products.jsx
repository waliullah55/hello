import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import SectionTittle from "../../../hooks/SectionTittle";


const Products = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err))
    }, []);
    return (
        <div className="pt-4 pb-16">
            <SectionTittle
                subTitle={"Recent Recipes"}
                title={"Latest Recipes"}
            ></SectionTittle>
            <div className="flex flex-wrap gap-x-6 gap-y-9">
                {
                    Products.map(product => <SingleProduct
                        key={product.id}
                        product={product}
                    >
                    </SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;