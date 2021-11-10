import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "../../../shared/SingleProduct/SingleProduct";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(true);
		axios
			.get("/data/products.json")
			.then((res) => {
				setProducts(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError("Something went wrong. Please Try agail later.");
			});
	}, []);

	return (
		<section className="wrapper mt-32">
			<h4 className="section-title">Latest Products</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{products.map((product, index) => (
					<SingleProduct key={index} product={product} />
				))}
			</div>
		</section>
	);
};

export default Products;
