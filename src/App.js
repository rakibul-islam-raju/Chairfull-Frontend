import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PayPage from "./pages/PayPage/PayPage";
import RegisterPage from "./pages/ReigsterPage/RegisterPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

function App() {
	return (
		<div className="App text-coolGray-600">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/pay" component={PayPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route
						exact
						path="/registration"
						component={RegisterPage}
					/>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
