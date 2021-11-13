import { Link } from "react-router-dom";
import Image from "../../../assets/images/promotion.jpg";

const CTA = () => {
	return (
		<section className="wrapper mt-32 flex flex-col md:flex-row justify-between items-center bg-coolGray-500 text-white">
			<div className="w-full md:w-6/12 text-center mb-12 md:mb-0 mt-12 md:mt-0">
				<h2 className="text-4xl lg:text-6xl border-b inline-block animate-bounce">
					SEASON SALE 2021
				</h2>
				<h4 className="text-2xl lg:text-4xl mt-6 mb-12">
					Get up to 25% discount
				</h4>
				<Link className="btn btn-secondary " to="/shop">
					Shop Now
				</Link>
			</div>
			<div className="w-full md:w-6/12">
				<img className="w-full" src={Image} alt="" />
			</div>
		</section>
	);
};

export default CTA;
