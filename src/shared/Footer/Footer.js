import {
	faDribbble,
	faFacebook,
	faInstagram,
	faLinkedin,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="mt-16 bg-coolGray-600 text-white py-5">
			<div className="wrapper flex items-center">
				<div className="w-full md:w-4/12">
					<div className="logo">
						<Link to="/">
							<h4 className="text-4xl font-dancing font-semibold">
								Chair
								<span className="text-orange-500">full</span>
							</h4>
						</Link>
					</div>
				</div>
				<div className="w-full md:w-4/12">
					<div className="flex justify-center">
						<div className="space-x-6">
							<Link className="hover:text-orange-500" to="/">
								<FontAwesomeIcon icon={faFacebook} size="lg" />
							</Link>
							<Link className="hover:text-orange-500" to="/">
								<FontAwesomeIcon icon={faInstagram} size="lg" />
							</Link>
							<Link className="hover:text-orange-500" to="/">
								<FontAwesomeIcon icon={faDribbble} size="lg" />
							</Link>
							<Link className="hover:text-orange-500" to="/">
								<FontAwesomeIcon icon={faLinkedin} size="lg" />
							</Link>
							<Link className="hover:text-orange-500" to="/">
								<FontAwesomeIcon icon={faYoutube} size="lg" />
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full md:w-4/12">
					<div className="flex justify-end">
						<div className="">
							<div className="mt-2">
								© 2021{" "}
								<span className="font-dm text-orange-500">
									Chairfull
								</span>{" "}
								| Developped by{" "}
								<Link
									className="text-orange-500 hover:underline"
									to={{
										pathname:
											"https://rakibul-islam-raju.netlify.app/",
									}}
									target="_blank"
								>
									Rakibul Islam
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
