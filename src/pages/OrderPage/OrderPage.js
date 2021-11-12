import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Breadcrumb from "../../shared/Breadcrumb/Breadcrumb";
import Loading from "../../shared/Loading/Loading";
import { baseUrl } from "../../Utilities/Utils";
import { useAuth } from "../../Contexts/AuthContext";
import ErrorMessage from "../../Utilities/Messages/ErrorMessage";
import Swal from "sweetalert2";

const OrderPage = () => {
	const { currentUser } = useAuth();
	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(false);
	const [submitLoading, setSubmitLoading] = useState(false);
	const [error, setError] = useState("");
	const [orderData, setOrderData] = useState({
		fullName: currentUser?.displayName,
		email: currentUser?.email,
		phone: "",
		quantity: "",
		address: "",
	});

	const { productID } = useParams();

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${baseUrl}/products/${productID}`)
			.then((res) => {
				setProduct(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError("Something went wrong. Please Try agail later.");
			});
	}, [productID]);

	const handleChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newOrderData = { ...orderData };
		newOrderData[field] = value;
		setOrderData(newOrderData);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitLoading(true);
		axios
			.post(`${baseUrl}/orders`, orderData)
			.then((res) => {
				Swal.fire({
					title: "Product ordered suffessfully",
					icon: "success",
					confirmButtonText: "OK",
				});
				e.target.reset();
				setSubmitLoading(false);
			})
			.catch((err) => {
				setError("Something went wrong! Please try again later.");
				setSubmitLoading(false);
			});
	};

	const resetError = () => {
		setError("");
	};

	return (
		<>
			<Breadcrumb pageTitle="Order Now" pagePath="Order" />
			<section className="wrapper mt-16">
				{loading ? (
					<Loading />
				) : (
					<>
						{error && (
							<ErrorMessage
								text={error}
								resetError={resetError}
							/>
						)}
						<div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 mt-6">
							<div className="w-full md:w-3/12">
								<img
									className="mb-4 rounded max-h-64 w-full mx-auto"
									src={product?.image}
									alt=""
								/>
							</div>
							<div className="w-full md:w-4/12 md:px-4">
								<h4 className="text-2xl mb-6">
									{product?.name}
								</h4>
								<span className="bg-orange-500 text-white px-3 py-1 rounded-full font-semibold">
									Price : $ {product?.price}
								</span>
								<p className="mt-6">{product?.description}</p>
							</div>
							<div className="w-full md:w-4/12">
								<h4 className="text-2xl mb-6">Place Order</h4>
								<form onSubmit={handleSubmit}>
									<div className="mb-3">
										<input
											className="form-input"
											type="text"
											name="fullName"
											placeholder="Full Name"
											required
											onChange={handleChange}
											value={orderData.fullName}
										/>
									</div>
									<div className="mb-3">
										<input
											className="form-input"
											type="email"
											name="email"
											placeholder="Email Address"
											required
											value={orderData.email}
										/>
									</div>
									<div className="mb-3">
										<input
											className="form-input"
											type="text"
											name="phone"
											placeholder="Phone Number"
											required
											onChange={handleChange}
										/>
									</div>
									<div className="mb-3">
										<input
											className="form-input"
											type="number"
											name="quantity"
											placeholder="Quantity"
											required
											onChange={handleChange}
											value={1}
										/>
									</div>
									<div className="mb-3">
										<textarea
											className="form-input"
											name="address"
											cols="30"
											rows="3"
											required
											onChange={handleChange}
											placeholder="Address"
										></textarea>
									</div>
									{submitLoading ? (
										<Loading />
									) : (
										<button
											className="p-2 btn-secondary w-full rounded"
											type="submit"
										>
											Order Now
										</button>
									)}
								</form>
							</div>
						</div>
					</>
				)}
			</section>
		</>
	);
};

export default OrderPage;
