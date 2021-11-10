import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		console.log("useeffect");
		axios
			.get("/data/products.json")
			.then((res) => setProducts(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<section className="wrapper mt-32">
			<h4 className="text-4xl text-center mb-12">Latest Products</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{products.map((product, index) => (
					<div key={index} className="group pb-4">
						<div className="overflow-hidden">
							<img
								className="w-full h-72 transform scale-100 group-hover:scale-125 transition duration-300"
								src={product.image}
								alt=""
							/>
						</div>
						<h4 className="text-xl mt-1">{product.name}</h4>
						<div className="flex justify-between items-center">
							<h6 className="text-lg">$ 26.00</h6>
							<div className="overflow-hidden">
								<button className="border-b-2 border-orange-500 transform translate-y-6 group-hover:translate-y-0 transition duration-200">
									Buy Now
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Products;
