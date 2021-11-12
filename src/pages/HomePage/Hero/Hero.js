import { Link } from "react-router-dom";
import HeroImage from "../../../assets/images/hero2.jpg";
const Hero = () => {
	return (
		<section className="wrapper flex flex-col md:flex-row justify-between items-center mt-6">
			<div className="w-full md:w-4/12 pr-4 text-center">
				<h2 className="text-5xl leading-snug uppercase">
					Every chair should be a{" "}
					<span className="border-b-2 border-orange-500 uppercase">
						Throne
					</span>{" "}
					and hold a king
				</h2>
				<Link to="/shop">
					<button className="mt-8 btn btn-primary">Shop Now</button>
				</Link>
			</div>
			<div className="w-full md:w-8/12">
				<img
					className="w-full"
					style={{ height: "500px" }}
					src={HeroImage}
					alt=""
				/>
			</div>
		</section>
	);
};

export default Hero;
