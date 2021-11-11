import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import PayPage from "./pages/PayPage/PayPage";
import RegisterPage from "./pages/ReigsterPage/RegisterPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
	return (
		<div className="App text-coolGray-600">
			<Router>
				<AuthProvider>
					<Header />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/shop" component={ShopPage} />
						<Route exact path="/pay" component={PayPage} />
						<PrivateRoute
							exact
							path="/order/:productID"
							component={OrderPage}
						/>
						<Route exact path="/login" component={LoginPage} />
						<Route
							exact
							path="/registration"
							component={RegisterPage}
						/>
					</Switch>
					<Footer />
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
