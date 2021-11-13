import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className="shadow py-3 bg-white">
			<div className="wrapper flex flex-wrap md:justify-between items-center">
				<div className="w-4/12">
					<Link to="/">
						<h2 className="text-5xl text-coolGray-600 font-dancing font-semibold">
							chair<span className="text-orange-500">full</span>
						</h2>
					</Link>
				</div>
				<div className="w-8/12">
					<div className="flex justify-end md:hidden">
						<button
							className="text-orange-500"
							onClick={() =>
								setShowMenu((prevState) => !prevState)
							}
						>
							{showMenu ? (
								<FontAwesomeIcon icon={faTimes} size="lg" />
							) : (
								<FontAwesomeIcon icon={faBars} size="lg" />
							)}
						</button>
					</div>
					{/* wide screen menu */}
					<div className="hidden md:flex md:justify-end">
						<Nav />
					</div>
				</div>
			</div>
			{/* mobile screen menu */}
			<div className="md:hidden wrapper flex justify-start">
				<div
					className={`overflow-hidden transition-all duration-300 transform ${
						showMenu ? "h-56" : "h-0"
					}`}
				>
					<Nav showMenu={showMenu} />
				</div>
			</div>
		</header>
	);
};

export default Header;
