import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "../../../shared/SingleProduct/SingleProduct";
import { baseUrl } from "../../../Utilities/Utils";
import Loading from "../../../shared/Loading/Loading";
import ErrorMessage from "../../../Utilities/Messages/ErrorMessage";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${baseUrl}/products?size=6`)
			.then((res) => {
				setProducts(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError("Something went wrong. Please Try again later.");
			});
	}, []);

	const resetError = () => {
		setError("");
	};

	return (
		<section className="wrapper mt-32">
			<h4 className="section-title">Latest Products</h4>
			{error && <ErrorMessage text={error} resetError={resetError} />}
			<div className="mt-8">
				{loading ? (
					<Loading />
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
						{products.map((product, index) => (
							<SingleProduct key={index} product={product} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Products;
