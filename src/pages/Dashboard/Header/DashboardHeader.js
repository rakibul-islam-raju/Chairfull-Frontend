import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DashboardHeader = ({ showMenu, setShowMenu }) => {
	return (
		<header className="bg-orange-500 text-white py-4">
			<div className="wrapper">
				<div className="flex justify-between items-center">
					<Link to="/">
						<h2 className="text-5xl text-coolGray-600 font-dancing font-semibold">
							chair<span className="text-white">full</span>
						</h2>
					</Link>

					<nav>
						<div className="block md:hidden">
							<button
								onClick={() =>
									setShowMenu((prevState) => !prevState)
								}
							>
								{showMenu ? (
									<FontAwesomeIcon icon={faTimes} />
								) : (
									<FontAwesomeIcon icon={faBars} />
								)}
							</button>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default DashboardHeader;
