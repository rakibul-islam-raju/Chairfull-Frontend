import axios from "axios";
import { useState, useEffect } from "react";
import AdminBreadcrumb from "../AdminBreadcrumb";
import { baseUrl } from "../../../Utilities/Utils";
import Loading from "../../../shared/Loading/Loading";
import ErrorMessage from "../../../Utilities/Messages/ErrorMessage";
import Swal from "sweetalert2";

const ManageReviews = () => {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${baseUrl}/reviews`)
			.then((res) => {
				setReviews(res.data);
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
					.delete(`${baseUrl}/reviews/${id}`)
					.then((res) => {
						if (res.data.deletedCount > 0) {
							Swal.fire({
								title: "Review deleted successfully",
								icon: "success",
								confirmButtonText: "OK",
							});
							const remainingReviews = reviews.filter(
								(review) => review._id !== id
							);
							setReviews(remainingReviews);
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
				pageTitle="Manage Reviews"
				pagePath="Manage Reviews"
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
													Name
												</th>
												<th className="px-4 py-3">
													Star
												</th>
												<th className="px-4 py-3">
													Review
												</th>
												<th className="px-4 py-3">
													Actions
												</th>
											</tr>
										</thead>
										<tbody className="bg-white">
											{reviews.map((review) => (
												<tr className="text-gray-700">
													<td className="px-4 py-3 border">
														<div className="flex items-center font-semibold text-sm">
															{review.name}
														</div>
													</td>
													<td className="px-4 py-3 text-ms font-semibold border">
														{review.star}
													</td>
													<td className="px-4 py-3 text-ms border">
														{review.review}
													</td>
													<td className="px-4 py-3 text-sm font-semibold border">
														<button
															onClick={() =>
																deleteHandler(
																	review._id
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

export default ManageReviews;
