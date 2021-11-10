import HeroImage from "../../../assets/images/hero2.jpg";
const Hero = () => {
	return (
		<section className="wrapper flex flex-col md:flex-row justify-between items-center mt-6">
			<div className="w-full md:w-5/12">
				<h2 className="text-5xl leading-snug uppercase">
					Every chair <br /> should be a <br />
					<span className="text-orange-500 uppercase">
						Throne
					</span>{" "}
					<br />
					and hold a <br /> king
					{/* <span className="text-orange-500 uppercase">king</span> */}
				</h2>
				<button className="mt-8 text-xl px-4 py-2 border border-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 ease-out">
					Shop Now
				</button>
			</div>
			<div className="w-full md:w-6/12">
				<img className="w-full" src={HeroImage} alt="" />
			</div>
		</section>
	);
};

export default Hero;
