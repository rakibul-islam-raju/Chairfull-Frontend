import axios from "axios";
import { useState } from "react";
import AdminBreadcrumb from "../AdminBreadcrumb";
import { baseUrl } from "../../../Utilities/Utils";
import Loading from "../../../shared/Loading/Loading";
import ErrorMessage from "../../../Utilities/Messages/ErrorMessage";
import Swal from "sweetalert2";

const AddProduct = () => {
	const [productData, setProductData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newProductData = { ...productData };
		newProductData[field] = value;
		setProductData(newProductData);
	};

	const handleSubmit = (e) => {
		console.log("submitted");
		e.preventDefault();
		setLoading(true);
		axios
			.post(`${baseUrl}/products`, productData)
			.then((res) => {
				if (res.data.insertedId) {
					Swal.fire({
						title: "Product was added successfully",
						icon: "success",
						confirmButtonText: "OK",
					});
					e.target.reset();
				}
				setLoading(false);
			})
			.catch((err) => {
				setError("Something went wrong! Please try again later.");
				setLoading(false);
			});
	};

	const resetError = () => {
		setError("");
	};

	return (
		<section>
			<AdminBreadcrumb pageTitle="Add Product" pagePath="Add Product" />
			<div className="dashboard-wrapper">
				<div className="w-full md:w-8/12 shadow px-6 py-3">
					{error && (
						<ErrorMessage text={error} resetError={resetError} />
					)}
					<form onSubmit={handleSubmit} className="mt-4">
						<div className="mb-4">
							<input
								className="form-input"
								type="text"
								placeholder="Product Name"
								required
								name="name"
								onChange={handleChange}
							/>
						</div>
						<div className="mb-4">
							<input
								className="form-input"
								type="text"
								placeholder="Image Url"
								required
								name="image"
								onChange={handleChange}
							/>
						</div>
						<div className="mb-4">
							<input
								className="form-input"
								type="number"
								placeholder="Product Price"
								required
								name="price"
								onChange={handleChange}
							/>
						</div>
						<div className="mb-4">
							<textarea
								name="description"
								cols="30"
								rows="5"
								required
								className="form-input"
								onChange={handleChange}
							/>
						</div>
						<div className="mt-4">
							{loading ? (
								<Loading />
							) : (
								<button
									className="btn btn-secondary rounded w-full"
									type="submit"
								>
									Save Product
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default AddProduct;
