import axios from "axios";
import { useState, useEffect } from "react";
import AdminBreadcrumb from "../AdminBreadcrumb";
import { baseUrl } from "../../../Utilities/Utils";
import Loading from "../../../shared/Loading/Loading";
import ErrorMessage from "../../../Utilities/Messages/ErrorMessage";
import Swal from "sweetalert2";

const ManageProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${baseUrl}/products`)
			.then((res) => {
				setProducts(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError("Something went wrong! Please try again later.");
				setLoading(false);
			});
	}, []);

	const deleteHandler = (id) => {
		setError("");

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#EF4444",
			cancelButtonColor: "#6B7280",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				setLoading(true);
				axios
					.delete(`${baseUrl}/products/${id}`)
					.then((res) => {
						if (res.data.deletedCount > 0) {
							Swal.fire({
								title: "Product deleted successfully",
								icon: "success",
								confirmButtonText: "OK",
							});
							const remainingProducts = products.filter(
								(product) => product._id !== id
							);
							setProducts(remainingProducts);
						}
						setLoading(false);
					})
					.catch((err) => {
						setError(
							"Something went wrong! Please try again later."
						);
						setLoading(false);
					});
			}
		});
	};

	const resetError = () => {
		setError("");
	};

	return (
		<section>
			<AdminBreadcrumb
				pageTitle="Manage Products"
				pagePath="Manage Products"
			/>
			<div className="w-full shadow px-6 py-3">
				{error && <ErrorMessage text={error} resetError={resetError} />}
				<div class="mt-4">
					{loading ? (
						<Loading />
					) : (
						<section className="font-mono">
							<div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
								<div className="w-full overflow-x-auto">
									<table className="w-full">
										<thead>
											<tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
												<th className="px-4 py-3">
													Product
												</th>
												<th className="px-4 py-3">
													Price
												</th>
												<th className="px-4 py-3">
													Actions
												</th>
											</tr>
										</thead>
										<tbody className="bg-white">
											{products.map((product) => (
												<tr className="text-gray-700">
													<td className="px-4 py-3 border">
														<div className="flex items-center font-semibold text-sm">
															<div className="">
																<img
																	className="w-24 h-24 rounded-full"
																	src={
																		product.image
																	}
																	alt=""
																/>
															</div>
															<p className="text-semibold ml-2">
																{product.name}
															</p>
														</div>
													</td>
													<td className="px-4 py-3 text-ms font-semibold border">
														$ {product.price}
													</td>
													<td className="px-4 py-3 text-sm font-semibold border">
														<button
															onClick={() =>
																deleteHandler(
																	product._id
																)
															}
															className="bg-red-100 text-red-700 px-2 py-1 font-semibold leading-tight rounded-sm text-sm"
														>
															Delete
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</section>
					)}
				</div>
			</div>
		</section>
	);
};

export default ManageProducts;
