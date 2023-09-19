

const SingleProduct = ({product}) => {
    return (
        <div className="card w-[410px] border-2 bg-base-100 hover:shadow-xl">
        <figure><img src={product.img} className="w-full" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{product.title}!</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
    );
};

export default SingleProduct;