import Image from "../../assets/images/under-construction.svg";
import Breadcrumb from "../../shared/Breadcrumb/Breadcrumb";

const PayPage = () => {
	return (
		<>
			<Breadcrumb pageTitle="Payment" pagePath="Pay" />
			<section className="wrapper mt-8">
				<img className="h-72 mx-auto" src={Image} alt="" />
				<h4 className="text-3xl text-center uppercase mt-6">
					This Page Is In Under Construction
				</h4>
			</section>
		</>
	);
};

export default PayPage;
