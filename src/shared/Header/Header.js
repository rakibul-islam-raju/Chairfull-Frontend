import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const Header = () => {
	const { currentUser, logout } = useAuth();

	return (
		<header className="shadow py-3">
			<div className="wrapper flex flex-wrap justify-between items-center">
				<div className="w-6/12 md:w-4/12">
					<Link to="/">
						<h2 className="text-5xl text-coolGray-600 font-dancing font-semibold">
							chair<span className="text-orange-500">full</span>
						</h2>
					</Link>
				</div>
				<div className="w-6/12 md:w-8/12">
					<nav>
						<ul className="flex flex-wrap space-x-4 justify-end items-center">
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
								<Link className="nav-link" to="/pay">
									Pay
								</Link>
							</li>
							{!currentUser ? (
								<li>
									<Link
										to="/login"
										className="btn btn-secondary  ml-2"
									>
										Login
									</Link>
								</li>
							) : (
								<>
									<li>
										<Link className="nav-link" to="/pay">
											My Orders
										</Link>
									</li>
									<li>
										<Link
											to="/"
											className="nav-link text-orange-500 font-semibold border-b-2 border-orange-500"
										>
											Dashboard
										</Link>
									</li>
									<li>
										<button
											onClick={logout}
											type="button"
											className="text-orange-500 shadow rounded-lg p-2  transition hover:shadow-lg"
										>
											<FontAwesomeIcon
												icon={faSignOutAlt}
											/>
										</button>
									</li>
								</>
							)}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
