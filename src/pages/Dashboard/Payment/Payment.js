import React from "react";
import AdminBreadcrumb from "../AdminBreadcrumb";
import Image from "../../../assets/images/under-construction.svg";

const Payment = () => {
	return (
		<>
			<AdminBreadcrumb pageTitle="Payment" pagePath="Payment" />
			<section className="dashboard-wrapper mt-8">
				<img className="h-72 mx-auto" src={Image} alt="" />
				<h4 className="text-3xl text-center uppercase mt-6">
					This Page Is In Under Construction
				</h4>
			</section>
		</>
	);
};

export default Payment;
