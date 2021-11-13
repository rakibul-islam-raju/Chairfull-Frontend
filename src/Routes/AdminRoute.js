import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const AdminRoute = ({ component: Component, ...rest }) => {
	const { isAdmin } = useAuth();

	return (
		<Route
			{...rest}
			render={(props) => {
				if (!isAdmin) {
					return (
						<Redirect
							to={{
								pathname: "/",
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
