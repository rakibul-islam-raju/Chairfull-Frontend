import LoginImage from "../../assets/images/login.svg";
import LoginForm from "./LoginForm";

const LoginPage = () => {
	return (
		<section className="wrapper mt-12">
			<div className="flex flex-wrap items-center">
				<div className="w-full md:w-4/12">
					<LoginForm />
				</div>
				<div className="w-full md:w-8/12">
					<img className="w-full h-96" src={LoginImage} alt="" />
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
