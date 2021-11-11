import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import DashboardHeader from "../pages/Dashboard/Header/DashboardHeader";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import UserOrder from "../pages/Dashboard/UserOrders.js/UserOrder";
import PrivateRoute from "../Routes/PrivateRoute";

const DashboardLayout = () => {
	const { currentUser, isAdmin } = useAuth();
	let { path, url } = useRouteMatch();

	return (
		<>
			<DashboardHeader />
			<div className="flex">
				<div className="hidden md:block md:w-2/12">
					<div className="bg-white h-screen border-r shadow">
						<h4 className="text-2xl text-center bg-coolGray-200 py-3">
							Dashboard
						</h4>
						<ul>
							<li className="">
								<Link className="sidebar-link" to="/">
									Home
								</Link>
							</li>
							{!isAdmin ? (
								<>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}`}
										>
											My Orders
										</Link>
									</li>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}`}
										>
											Add Review
										</Link>
									</li>
								</>
							) : (
								<>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}`}
										>
											Manage Orders
										</Link>
									</li>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}`}
										>
											Add Product
										</Link>
									</li>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}`}
										>
											Manage Product
										</Link>
									</li>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}`}
										>
											Manage Reviews
										</Link>
									</li>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}/make-admin`}
										>
											Make Admin
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
				<div className="w-full md:w-10/12">
					<Switch>
						<PrivateRoute
							exact
							path={`${path}/make-admin`}
							component={MakeAdmin}
						/>
						<PrivateRoute exact path={path} component={UserOrder} />
					</Switch>
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
