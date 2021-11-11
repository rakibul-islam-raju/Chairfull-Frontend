import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const AdminRoute = ({ component: Component, ...rest }) => {
	const { currentUser, isAdmin } = useAuth();

	return (
		<Route
			{...rest}
			render={(props) => {
				if (!currentUser && !isAdmin) {
					return (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: props.location },
							}}
						/>
					);
				}

				return <Component {...props} />;
			}}
		></Route>
	);
};

export default AdminRoute;
