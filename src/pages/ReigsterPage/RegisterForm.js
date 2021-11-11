import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import Loading from "../../shared/Loading/Loading";
import ErrorMessage from "../../Utilities/Messages/ErrorMessage";

const RegisterForm = () => {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [registerData, setRegisterData] = useState({
		fullName: "",
		email: "",
		password: "",
		password2: "",
	});

	const { signup } = useAuth();

	const history = useHistory();
	const location = useLocation();

	const redirectUrl = location?.state?.from || "/";

	const handleChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newRegisterData = { ...registerData };
		newRegisterData[field] = value;
		setRegisterData(newRegisterData);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// do validation
		if (registerData.password !== registerData.password2) {
			setError("Passwords didn't match");
			return false;
		}

		// signup
		try {
			setError("");
			setLoading(true);
			signup(
				registerData.email,
				registerData.password,
				registerData.fullName
			);
			history.push(redirectUrl);
		} catch (err) {
			console.log(err);
			setLoading(false);
			setError("Faild to create an account");
		}
	};

	const resetError = () => {
		setError("");
	};

	return (
		<>
			{error && <ErrorMessage text={error} resetError={resetError} />}

			<form onSubmit={handleSubmit} className="mt-4">
				<div className="mb-4">
					<input
						className="form-input"
						placeholder="Name"
						type="text"
						required
						name="fullName"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-4">
					<input
						className="form-input"
						placeholder="Email"
						type="email"
						required
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-4">
					<input
						className="form-input"
						placeholder="Password"
						type="password"
						required
						name="password"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-4">
					<input
						className="form-input"
						placeholder="Confirm Password"
						type="password"
						required
						name="password2"
						onChange={handleChange}
					/>
				</div>

				{loading ? (
					<Loading />
				) : (
					<button
						className="p-2 btn-secondary w-full rounded"
						type="submit"
					>
						Register
					</button>
				)}
			</form>
			<p className="mt-2 text-center">
				Already have an account?{" "}
				<Link className="text-orange-500" to="/login">
					Login here
				</Link>
			</p>
		</>
	);
};

export default RegisterForm;
