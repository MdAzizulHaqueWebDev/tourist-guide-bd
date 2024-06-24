/** @format */

import SectionTitle from "./SectionTitle";

const WhyChoseUs = () => {
	const card1Text = `Experience firsthand the latest innovations in milling
	machinery. Our tours include detailed demonstrations of
	state-of-the-art equipment, showcasing their capabilities,
	features, and the technological advancements that set them apart
	from older models`;
	const card2Text = `	We offer services which are better comparing to other agencies
	running similar trips. Our drivers and guides are highly
	experienced and trained for hospitality. The hotels are
	carefully picked to ensure your comfort and safety`;
	const card3Text = `To book this trip you need to pay only US$100 and balance 45
	days prior to the trip. If at any time before this you change
	your mind your money is safe with Max Holidays and can be
	transfered to your next trip with us.`;
	const card4Text = `Our tour guides are locals who possess an in-depth understanding
	of the history, culture, and hidden gems of Bangladesh. Their
	insider knowledge allows you to explore beyond the typical
	tourist attractions and delve into the heart of our rich
	heritage`;
	const sliceText = (text) => text.slice(0, 205)+"......";
	return (
		<>
			<section  id="why-chose" className="text-gray-700 my-8 body-font">
				<SectionTitle
					heading={"Why Chose us"}
					subheading={"why we different"}
				/>
				<div className="px-3 border m-1">
					<div className="flex flex-wrap p-4 gap-1 w-full text-start justify-center">
						<div className="p-6 rounded shadow-md md:w-[24%]">
							<div className="px-3 py-6 transform transition duration-500 hover:scale-110">
								<div className="flex justify-center">
									<img
										src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
										className="w-32 mb-3"
									/>
								</div>
								<h2 className="title-font font-regular text-2xl text-gray-900">
									Latest Machinery
								</h2>
							</div>
							<p>{sliceText(card1Text)}</p>
						</div>

						<div className="p-6 rounded shadow-md md:w-[24%]">
							<div className="px-4 py-6 transform transition duration-500 hover:scale-110">
								<div className="flex justify-center">
									<img
										src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
										className="w-32 mb-3"
									/>
								</div>
								<h2 className="title-font font-regular text-2xl text-gray-900">
									Value for money
								</h2>
							</div>
							<p>{sliceText(card2Text)}</p>
						</div>

						<div className="p-6 rounded shadow-md md:w-[24%]">
							<div className="px-4 py-6 transform transition duration-500 hover:scale-110">
								<div className="flex justify-center">
									<img
										src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
										className="w-32 mb-3"
									/>
								</div>
								<h2 className="title-font font-regular text-2xl text-gray-900">
									Time Efficiency
								</h2>
							</div>
							<p>{sliceText(card3Text)}</p>
						</div>

						<div className="p-6 rounded shadow-md md:w-[24%]">
							<div className="px-4 py-6 transform transition duration-500 hover:scale-110">
								<div className="flex justify-center">
									<img
										src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
										className="w-32 mb-3"
									/>
								</div>
								<h2 className="title-font font-regular text-2xl text-gray-900">
									Expertise in Industry
								</h2>
							</div>
							<p>{sliceText(card4Text)}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default WhyChoseUs;
