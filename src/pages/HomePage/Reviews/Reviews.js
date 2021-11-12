import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../../../shared/Loading/Loading";
import Rating from "react-rating";
import { baseUrl } from "../../../Utilities/Utils";
import ErrorMessage from "../../../Utilities/Messages/ErrorMessage";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${baseUrl}/reviews`)
			.then((res) => {
				setReviews(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError("Something went wrong. Please try again later.");
				setLoading(false);
			});
	}, []);

	const resetError = () => {
		setError("");
	};

	const fillRatingMarkup = (
		<FontAwesomeIcon className="text-yellow-500" icon={faStar} />
	);
	const emptyRatingMarkup = (
		<FontAwesomeIcon className="text-coolGray-300" icon={faStar} />
	);

	return (
		<section className="wrapper mt-32">
			<h4 className="section-title">Testimonials</h4>
			{error && <ErrorMessage text={error} resetError={resetError} />}
			{loading ? (
				<Loading />
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{reviews.map((review, index) => (
						<div className="p-4 text-center">
							<FontAwesomeIcon
								className="text-coolGray-500"
								icon={faQuoteRight}
								size="lg"
							/>
							<p className="text-lg">{review.review}</p>
							<Rating
								className="my-2"
								initialRating={review.star}
								readonly
								fullSymbol={fillRatingMarkup}
								emptySymbol={emptyRatingMarkup}
							/>
							<h5 className="uppercase font-semibold">
								{review.name}
							</h5>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Reviews;
