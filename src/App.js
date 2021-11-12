import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import MainLayout from "./Layout/MainLayout";
import DashboardLayout from "./Layout/DashboardLayout";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
	return (
		<div className="App text-coolGray-600">
			<Router>
				<ScrollToTop
					smooth
					component={
						<p className="text-orange-500">
							<FontAwesomeIcon icon={faAngleUp} />
						</p>
					}
				/>
				<AuthProvider>
					<Switch>
						<Route path="/dashboard" component={DashboardLayout} />
						<Route path="/" component={MainLayout} />
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
