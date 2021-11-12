import axios from "axios";
import { useState } from "react";
import AdminBreadcrumb from "../AdminBreadcrumb";
import { baseUrl } from "../../../Utilities/Utils";
import Loading from "../../../shared/Loading/Loading";
import ErrorMessage from "../../../Utilities/Messages/ErrorMessage";

const ManageOrders = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	return (
		<section>
			<AdminBreadcrumb
				pageTitle="Manage Products"
				pagePath="Manage Products"
			/>
			<div className="w-full shadow px-6 py-3">
				<div class="">
					<div class="overflow-x-auto w-full">
						<table class="mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
							<thead class="bg-coolGray-600">
								<tr class="text-white text-left">
									<th class="font-semibold text-sm uppercase px-6 py-4">
										{" "}
										Product{" "}
									</th>
									<th class="font-semibold text-sm uppercase px-6 py-4">
										{" "}
										Designation{" "}
									</th>
									<th class="font-semibold text-sm uppercase px-6 py-4 text-center">
										{" "}
										status{" "}
									</th>
									<th class="font-semibold text-sm uppercase px-6 py-4 text-center">
										{" "}
										role{" "}
									</th>
									<th class="font-semibold text-sm uppercase px-6 py-4">
										{" "}
									</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200">
								<tr>
									<td class="px-6 py-4">
										<div class="flex items-center space-x-3">
											<div class="inline-flex w-10 h-10">
												{" "}
												<img
													class="w-10 h-10 object-cover rounded-full"
													alt="User avatar"
													src="https://i.imgur.com/siKnZP2.jpg"
												/>{" "}
											</div>
											<div>
												<p> Mira Rodeo </p>
												<p class="text-gray-500 text-sm font-semibold tracking-wide">
													{" "}
													mirarodeo23@mail.com{" "}
												</p>
											</div>
										</div>
									</td>
									<td class="px-6 py-4">
										<p class=""> Software Developer </p>
										<p class="text-gray-500 text-sm font-semibold tracking-wide">
											{" "}
											Development{" "}
										</p>
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										<span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">
											{" "}
											Active{" "}
										</span>{" "}
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										Developer{" "}
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										<a
											href="#"
											class="text-purple-800 hover:underline"
										>
											Edit
										</a>{" "}
									</td>
								</tr>
								<tr>
									<td class="px-6 py-4">
										<div class="flex items-center space-x-3">
											<div class="inline-flex w-10 h-10">
												{" "}
												<img
													class="w-10 h-10 object-cover rounded-full"
													alt="User avatar"
													src="https://i.imgur.com/siKnZP2.jpg"
												/>{" "}
											</div>
											<div>
												<p> Mira Rodeo </p>
												<p class="text-gray-500 text-sm font-semibold tracking-wide">
													{" "}
													mirarodeo23@mail.com{" "}
												</p>
											</div>
										</div>
									</td>
									<td class="px-6 py-4">
										<p class=""> Software Developer </p>
										<p class="text-gray-500 text-sm font-semibold tracking-wide">
											{" "}
											Development{" "}
										</p>
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										<span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">
											{" "}
											Active{" "}
										</span>{" "}
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										Developer{" "}
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										<a
											href="#"
											class="text-purple-800 hover:underline"
										>
											Edit
										</a>{" "}
									</td>
								</tr>
								<tr>
									<td class="px-6 py-4">
										<div class="flex items-center space-x-3">
											<div class="inline-flex w-10 h-10">
												{" "}
												<img
													class="w-10 h-10 object-cover rounded-full"
													alt="User avatar"
													src="https://i.imgur.com/siKnZP2.jpg"
												/>{" "}
											</div>
											<div>
												<p> Mira Rodeo </p>
												<p class="text-gray-500 text-sm font-semibold tracking-wide">
													{" "}
													mirarodeo23@mail.com{" "}
												</p>
											</div>
										</div>
									</td>
									<td class="px-6 py-4">
										<p class=""> Software Developer </p>
										<p class="text-gray-500 text-sm font-semibold tracking-wide">
											{" "}
											Development{" "}
										</p>
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										<span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">
											{" "}
											Active{" "}
										</span>{" "}
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										Developer{" "}
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										<a
											href="#"
											class="text-purple-800 hover:underline"
										>
											Edit
										</a>{" "}
									</td>
								</tr>
								<tr>
									<td class="px-6 py-4">
										<div class="flex items-center space-x-3">
											<div class="inline-flex w-10 h-10">
												{" "}
												<img
													class="w-10 h-10 object-cover rounded-full"
													alt="User avatar"
													src="https://i.imgur.com/siKnZP2.jpg"
												/>{" "}
											</div>
											<div>
												<p> Mira Rodeo </p>
												<p class="text-gray-500 text-sm font-semibold tracking-wide">
													{" "}
													mirarodeo23@mail.com{" "}
												</p>
											</div>
										</div>
									</td>
									<td class="px-6 py-4">
										<p class=""> Software Developer </p>
										<p class="text-gray-500 text-sm font-semibold tracking-wide">
											{" "}
											Development{" "}
										</p>
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										<span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">
											{" "}
											Active{" "}
										</span>{" "}
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										Developer{" "}
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										<a
											href="#"
											class="text-purple-800 hover:underline"
										>
											Edit
										</a>{" "}
									</td>
								</tr>
								<tr>
									<td class="px-6 py-4">
										<div class="flex items-center space-x-3">
											<div class="inline-flex w-10 h-10">
												{" "}
												<img
													class="w-10 h-10 object-cover rounded-full"
													alt="User avatar"
													src="https://i.imgur.com/siKnZP2.jpg"
												/>{" "}
											</div>
											<div>
												<p> Mira Rodeo </p>
												<p class="text-gray-500 text-sm font-semibold tracking-wide">
													{" "}
													mirarodeo23@mail.com{" "}
												</p>
											</div>
										</div>
									</td>
									<td class="px-6 py-4">
										<p class=""> Software Developer </p>
										<p class="text-gray-500 text-sm font-semibold tracking-wide">
											{" "}
											Development{" "}
										</p>
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										<span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">
											{" "}
											Active{" "}
										</span>{" "}
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										Developer{" "}
									</td>
									<td class="px-6 py-4 text-center">
										{" "}
										<a
											href="#"
											class="text-purple-800 hover:underline"
										>
											Edit
										</a>{" "}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ManageOrders;
