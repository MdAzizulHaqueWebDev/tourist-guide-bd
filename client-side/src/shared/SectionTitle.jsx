/** @format */

const SectionTitle = ({ heading, subheading }) => {
	return (
		<div
			className="text-center my-6
			space-y-2"
		>
			<h3 className="font-medium">{subheading}</h3>
			<h1 className="font-bold responsive-text">{heading}</h1>
			<div className="divider w-3/12 divider-error mx-auto"></div>
		</div>
	);
};

export default SectionTitle;
