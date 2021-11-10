import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

function App() {
	return (
		<div className="App text-coolGray-600">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
