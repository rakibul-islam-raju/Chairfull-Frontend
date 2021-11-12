import { Switch, useRouteMatch, Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import DashboardHeader from "../pages/Dashboard/Header/DashboardHeader";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrders from "../pages/Dashboard/ManageOrders/ManageOrders";
import ManageProducts from "../pages/Dashboard/ManageProducts/ManageProducts";
import ManageReviews from "../pages/Dashboard/ManageReviews/ManageReviews";
import PrivateRoute from "../Routes/PrivateRoute";
import AdminRoute from "../Routes/AdminRoute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBox,
	faStar,
	faCartPlus,
	faCog,
	faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const DashboardLayout = () => {
	const { isAdmin } = useAuth();
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
							{!isAdmin ? (
								<>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}`}
										>
											<FontAwesomeIcon
												className="mr-2"
												icon={faBox}
											/>
											My Orders
										</Link>
									</li>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}/add-review`}
										>
											<FontAwesomeIcon
												className="mr-2"
												icon={faStar}
											/>
											Add Review
										</Link>
									</li>
								</>
							) : (
								<>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}/add-product`}
										>
											<FontAwesomeIcon
												className="mr-2"
												icon={faCartPlus}
											/>
											Add Product
										</Link>
									</li>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}`}
										>
											<FontAwesomeIcon
												className="mr-2"
												icon={faCog}
											/>
											Manage Orders
										</Link>
									</li>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}/manage-products`}
										>
											<FontAwesomeIcon
												className="mr-2"
												icon={faCog}
											/>
											Manage Products
										</Link>
									</li>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}/manage-reviews`}
										>
											<FontAwesomeIcon
												className="mr-2"
												icon={faCog}
											/>
											Manage Reviews
										</Link>
									</li>
									<li className="">
										<Link
											className="sidebar-link"
											to={`${url}/make-admin`}
										>
											<FontAwesomeIcon
												className="mr-2"
												icon={faUserShield}
											/>
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
						<AdminRoute
							path={`${path}/make-admin`}
							component={MakeAdmin}
						/>
						<AdminRoute
							path={`${path}/add-product`}
							component={AddProduct}
						/>
						<AdminRoute
							path={`${path}/manage-products`}
							component={ManageProducts}
						/>
						<AdminRoute
							path={`${path}/manage-reviews`}
							component={ManageReviews}
						/>
						<PrivateRoute
							path={`${path}/add-review`}
							component={AddReview}
						/>
						<PrivateRoute
							exact
							path={path}
							component={ManageOrders}
						/>
					</Switch>
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
