import CTA from "./CTA/CTA";
import Hero from "./Hero/Hero";
import Newsletter from "./Newsletter/Newsletter";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const HomePage = () => {
	return (
		<div>
			<Hero />
			<Products />
			<CTA />
			<Reviews />
			<Newsletter />
		</div>
	);
};

export default HomePage;
