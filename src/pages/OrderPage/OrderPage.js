import { useParams } from "react-router";
import Breadcrumb from "../../shared/Breadcrumb/Breadcrumb";

const OrderPage = () => {
	const { productID } = useParams();

	return (
		<>
			<Breadcrumb pageTitle="Order" pagePath="Order" />
			<section className="wrapper mt-16">
				<h4>Order Page, id = {productID}</h4>
			</section>
		</>
	);
};

export default OrderPage;
