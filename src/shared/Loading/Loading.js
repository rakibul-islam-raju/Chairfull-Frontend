import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
	return (
		<div className="flex justify-center">
			<FontAwesomeIcon
				className="text-orange-500 text-4xl"
				icon={faCircleNotch}
				spin
				size="lg"
			/>
		</div>
	);
};

export default Loading;
