import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const Nav = () => {
	const { currentUser, logout } = useAuth();

	return (
		<nav className={`mt-4 md:mt-0`}>
			<ul className="flex flex-col md:flex-row flex-wrap md:space-x-4 space-y-1 md:space-y-0 md:justify-end items-start md:items-center">
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
				{!currentUser ? (
					<li>
						<Link
							to="/login"
							className="btn btn-secondary  md:ml-2"
						>
							<button className="mt-3">Login</button>
						</Link>
					</li>
				) : (
					<>
						<li>
							<Link className="nav-link" to="/dashboard">
								My Orders
							</Link>
						</li>
						<li>
							<Link
								to="/dashboard"
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
								<FontAwesomeIcon icon={faSignOutAlt} />
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
