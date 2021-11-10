import { Link } from "react-router-dom";

const LoginForm = () => {
	return (
		<>
			<form className="">
				<div className="mb-4">
					<input
						className="form-input"
						placeholder="Email"
						type="email"
					/>
				</div>
				<div className="mb-4">
					<input
						className="form-input"
						placeholder="Password"
						type="password"
					/>
				</div>
				<button
					className="p-2 btn-secondary w-full rounded"
					type="submit"
				>
					Login
				</button>
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
