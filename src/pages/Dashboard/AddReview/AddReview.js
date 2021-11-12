import axios from "axios";
import { useState } from "react";
import AdminBreadcrumb from "../AdminBreadcrumb";
import { baseUrl } from "../../../Utilities/Utils";
import Loading from "../../../shared/Loading/Loading";
import ErrorMessage from "../../../Utilities/Messages/ErrorMessage";
import Swal from "sweetalert2";

const AddReview = () => {
	const [reviewData, setReviewData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newReviewData = { ...reviewData };
		newReviewData[field] = value;
		setReviewData(newReviewData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// do validation
		setError("");
		if (isNaN(reviewData?.star)) {
			setError("Please select star rating");
			return false;
		}

		setLoading(true);
		axios
			.post(`${baseUrl}/reviews`, reviewData)
			.then((res) => {
				if (res.data.insertedId) {
					Swal.fire({
						title: "Reviewed successfully",
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
			<AdminBreadcrumb pageTitle="Add Review" pagePath="Add Review" />
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
								placeholder="Name"
								required
								name="name"
								onChange={handleChange}
							/>
						</div>
						<div onChange={handleChange} className="mb-4">
							<select className="form-input" required name="star">
								<option>Select Star</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
						<div className="mb-4">
							<textarea
								name="review"
								placeholder="Review"
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
									Save Review
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default AddReview;
