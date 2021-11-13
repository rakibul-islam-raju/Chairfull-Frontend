import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import RegisterPage from "../pages/ReigsterPage/RegisterPage";
import ShopPage from "../pages/ShopPage/ShopPage";
import PrivateRoute from "../Routes/PrivateRoute";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const MainLayout = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<PrivateRoute
					exact
					path="/order/:productID"
					component={OrderPage}
				/>
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/registration" component={RegisterPage} />
			</Switch>
			<Footer />
		</>
	);
};

export default MainLayout;
