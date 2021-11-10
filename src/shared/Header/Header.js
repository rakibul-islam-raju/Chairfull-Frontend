import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="shadow py-3">
			<div className="wrapper flex flex-wrap justify-between items-center">
				<div className="w-6/12 md:w-4/12">
					<Link to="/">
						<h2 className="text-4xl text-coolGray-600">
							chair<span className="text-orange-500">full</span>
						</h2>
					</Link>
				</div>
				<div className="w-6/12 md:w-8/12">
					<nav>
						<ul className="flex flex-wrap space-x-4 justify-end">
							<li>
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/shop">
									Shop
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/">
									Pay
								</Link>
							</li>
							<li>
								<Link
									to="/login"
									className="btn btn-secondary  ml-2"
								>
									Login
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
