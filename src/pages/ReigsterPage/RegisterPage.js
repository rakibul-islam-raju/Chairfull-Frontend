import RegisterImage from "../../assets/images/login.svg";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
	return (
		<section className="wrapper mt-12">
			<div className="flex flex-wrap items-center">
				<div className="w-full md:w-4/12">
					<RegisterForm />
				</div>
				<div className="w-full md:w-8/12">
					<img className="w-full h-96" src={RegisterImage} alt="" />
				</div>
			</div>
		</section>
	);
};

export default RegisterPage;
