import axios from "axios";
import { useState } from "react";
import AdminBreadcrumb from "../AdminBreadcrumb";
import { baseUrl } from "../../../Utilities/Utils";
import Loading from "../../../shared/Loading/Loading";
import ErrorMessage from "../../../Utilities/Messages/ErrorMessage";

const MakeAdmin = () => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		console.log("submitted");
		e.preventDefault();
		const user = { email };
		setLoading(true);
		axios
			.put(`${baseUrl}/users/admin`, user)
			.then((res) => {
				if (res.data.modifiedCount > 0) {
					window.alert("User added as admin.");
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
		<>
			<AdminBreadcrumb pageTitle="Make Admin" pagePath="Admin" />
			<div className="dashboard-wrapper">
				<div className="w-full md:w-6/12 mx-auto p-12">
					{error && (
						<ErrorMessage text={error} resetError={resetError} />
					)}
					<form onSubmit={handleSubmit} className="mt-4">
						<input
							className="form-input"
							type="email"
							placeholder="Email Address"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<div className="mt-4">
							{loading ? (
								<Loading />
							) : (
								<button
									className="btn btn-secondary rounded w-full"
									type="submit"
								>
									Make Admin
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default MakeAdmin;
