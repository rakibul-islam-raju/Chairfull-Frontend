import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-coolGray-500 text-white">
			<div className="wrapper flex py-8">
				<div className="w-full md:w-4/12">
					<div className="logo">
						<Link to="/">
							<h4 className="text-4xl">
								chair
								<span className="text-orange-500">full</span>
							</h4>
						</Link>
					</div>
				</div>
			</div>
			<div className="bg-coolGray-600 py-2">
				<div className="wrapper">
					Developped by Rakibul Islam © 2021 chairfull
				</div>
			</div>
		</footer>
	);
};

export default Footer;
