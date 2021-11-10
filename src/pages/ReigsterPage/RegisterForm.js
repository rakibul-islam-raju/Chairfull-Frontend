import { Link } from "react-router-dom";

const RegisterForm = () => {
	return (
		<>
			<form className="">
				<div className="mb-4">
					<input
						className="form-input"
						placeholder="Name"
						type="text"
					/>
				</div>
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
					Register
				</button>
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