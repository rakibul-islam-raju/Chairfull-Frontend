import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import Loading from "../../shared/Loading/Loading";
import ErrorMessage from "../../Utilities/Messages/ErrorMessage";

const LoginForm = () => {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const { login } = useAuth();

	const history = useHistory();
	const location = useLocation();

	const redirectUrl = location?.state?.from || "/";

	const handleChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// login
		try {
			setError("");
			setLoading(true);
			await login(loginData.email, loginData.password);
			history.push(redirectUrl);
		} catch (err) {
			console.log(err);
			setLoading(false);
			setError("Faild to login");
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
						placeholder="Email"
						type="email"
						name="email"
						required
						onChange={handleChange}
					/>
				</div>
				<div className="mb-4">
					<input
						className="form-input"
						placeholder="Password"
						type="password"
						name="password"
						required
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
						Login
					</button>
				)}
			</form>
			<p className="mt-2 text-center">
				Don't have an account?{" "}
				<Link className="text-orange-500" to="/registration">
					Register here
				</Link>
			</p>
		</>
	);
};

export default LoginForm;
