import { Link } from "react-router-dom";

const AdminBreadcrumb = ({ pageTitle, pagePath }) => {
	return (
		<section className="bg-coolGray-100 pt-2 pb-4">
			<div className="wrapper">
				<h4 className="page-title text-4xl pl-2 border-l-4 border-orange-500">
					{pageTitle}
				</h4>
				<h6 className="pl-4 mt-2">
					<Link className="hover:text-orange-500" to="/dashboard">
						Dashboard
					</Link>{" "}
					&gt; {pagePath}
				</h6>
			</div>
		</section>
	);
};

export default AdminBreadcrumb;
