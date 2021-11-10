import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
			<div className="bg-coolGray-100 py-6">
				<div className="wrapper">
					<h4 className="page-title text-4xl pl-2 border-l-4 border-orange-500">
						The Shop
					</h4>
					<h6 className="pl-4 mt-2">
						<Link className="hover:text-orange-500" to="/">
							Home
						</Link>{" "}
						&gt; Shop
					</h6>
				</div>
			</div>
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
