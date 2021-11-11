import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import MainLayout from "./Layout/MainLayout";
import DashboardLayout from "./Layout/DashboardLayout";

function App() {
	return (
		<div className="App text-coolGray-600">
			<Router>
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
