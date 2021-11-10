const Newsletter = () => {
	return (
		<section className="wrapper mt-32">
			<div className="w-full md:w-6/12 mx-auto">
				<h4 className="text-center text-3xl uppercase mb-4">
					Get regular <br /> discounts & updates
				</h4>
				<input
					className="w-full border-0 border-b-2 text-center focus:border-none focus:ring-0 focus:border-orange-500"
					type="email"
					placeholder="Your Email Address"
				/>
				<div className="flex justify-center">
					<button className="border-b-2 border-orange-500 mt-4">
						SUBSCRIBE
					</button>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
