import axios from "axios";
import { useState, useEffect } from "react";
import AdminBreadcrumb from "../AdminBreadcrumb";
import { baseUrl } from "../../../Utilities/Utils";
import Loading from "../../../shared/Loading/Loading";
import ErrorMessage from "../../../Utilities/Messages/ErrorMessage";

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
		const proceed = window.confirm(
			"Are you sure, you want to delete the product?"
		);
		if (proceed) {
			setLoading(true);
			axios
				.delete(`${baseUrl}/products/${id}`)
				.then((res) => {
					if (res.data.deletedCount > 0) {
						alert("Deleted successfully");
						const remainingProducts = products.filter(
							(product) => product._id !== id
						);
						setProducts(remainingProducts);
					}
					setLoading(false);
				})
				.catch((err) => {
					setError("Something went wrong! Please try again later.");
					setLoading(false);
				});
		}
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
						<div class="overflow-x-auto w-full">
							<table class="mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
								<thead class="bg-coolGray-600">
									<tr class="text-white text-left">
										<th class="font-semibold text-sm uppercase px-6 py-4">
											{" "}
											Product{" "}
										</th>
										<th class="font-semibold text-sm uppercase px-6 py-4 text-center">
											{" "}
											Price{" "}
										</th>
										<th class="font-semibold text-sm uppercase px-6 py-4">
											{" "}
										</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200">
									{products.map((product) => (
										<tr>
											<td class="px-6 py-4">
												<div class="flex items-center space-x-3">
													<div class="inline-flex w-28 h-28">
														{" "}
														<img
															class="w-28 h-28 object-cover rounded"
															alt="User avatar"
															src={product.image}
														/>{" "}
													</div>
													<div>
														<h4 className="text-xl">
															{" "}
															{product.name}{" "}
														</h4>
													</div>
												</div>
											</td>
											<td class="px-6 py-4 text-center">
												{" "}
												$ {product.price}{" "}
											</td>
											<td class="px-6 py-4 text-center">
												{" "}
												<button
													onClick={() =>
														deleteHandler(
															product._id
														)
													}
													class="text-red-500 bg-red-100 hover:bg-red-200 transition px-2 py-1 rounded"
												>
													Delete
												</button>{" "}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ManageProducts;
