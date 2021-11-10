import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../shared/Breadcrumb/Breadcrumb";
import Loading from "../../shared/Loading/Loading";
import SingleProduct from "../../shared/SingleProduct/SingleProduct";

const ShopPage = () => {
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
		<>
			<Breadcrumb pageTitle="The Shop" pagePath="Shop" />
			<section className="wrapper mt-12">
				{loading ? (
					<Loading />
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{products.map((product, index) => (
							<SingleProduct key={index} product={product} />
						))}
					</div>
				)}
			</section>
		</>
	);
};

export default ShopPage;
