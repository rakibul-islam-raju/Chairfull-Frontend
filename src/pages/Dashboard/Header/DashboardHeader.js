import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../Contexts/AuthContext";

const DashboardHeader = () => {
	const { logout } = useAuth();

	return (
		<header className="bg-orange-500 text-white py-4">
			<div className="wrapper">
				<div className="flex justify-end">
					<nav>
						<ul>
							<li>
								<button
									onClick={logout}
									type="button"
									className="bg-white text-orange-500 shadow rounded py-1 px-2  transition hover:shadow-lg"
								>
									Logout
									<FontAwesomeIcon
										className="ml-2"
										icon={faSignOutAlt}
									/>
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default DashboardHeader;
