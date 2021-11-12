import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
	return (
		<div className="group pb-4">
			<div className="overflow-hidden">
				<img
					className="w-full h-72 transform scale-100 group-hover:scale-125 transition duration-300"
					src={product.image}
					alt={product.name}
				/>
			</div>
			<h4 className="text-xl mt-1">{product.name}</h4>
			<div className="flex justify-between items-center">
				<h6 className="text-lg">$ 26.00</h6>
				<div className="overflow-hidden">
					<button className="border-b-2 border-orange-500 transform translate-y-6 group-hover:translate-y-0 transition duration-200">
						<Link to={`order/${product._id}`}>Order Now</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
