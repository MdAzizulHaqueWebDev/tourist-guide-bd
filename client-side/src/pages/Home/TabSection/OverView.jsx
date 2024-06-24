/** @format */

const OverView = () => {
	return (
		<div>
			<section className="bg-gray-50 md:p-4 p-1 text-gray-800">
				<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
					<div className="flex items-center flex-col shadow md:p-2 md:flex-row">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								// className="absolute w-full h-full top-0 left-0"
								width="100%"
								height="315"
								src="https://www.youtube.com/embed/dVAVFOU7dGk?si=ElG_ylA2WD8fWZq7"
								title="YouTube video player"
								frameBorder="0"
								referrerPolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>
						</div>
						<div className="p-6 space-y-2 lg:col-span-5">
							<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
								Dhaka In 71 seconds
							</h3>
							<span className="text-xs text-gray-600">February 19, 2021</span>
							<p>The beautiful scence of the Dhaka in Bangladesh</p>
						</div>
					</div>
					<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow hover:shadow-blue-300 border bg-gray-100 ">
							<div className="aspect-w-16 aspect-h-9">
								<iframe
									width={"100%"}
									height={315}
									src="https://www.youtube.com/embed/FKjmo8itr84?si=2a6gXb8pDpe63OoF"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
									Beauty Of the sylhet
								</h3>
								<span className="text-xs text-gray-600">January 21, 2023</span>
								<p>
									One of the most iconic landmarks in Sylhet is the Ratargul
									Swamp Forest, a unique freshwater swamp forest that offers an
									enchanting experience of boat rides through its submerged
									trees. The Jaflong Valley, with its majestic hills and the
									Dawki River, is another must-visit spot known for its
									crystal-clear waters and panoramic views of the Khasi Hills.
								</p>
							</div>
						</div>
						<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow hover:shadow-blue-300 border bg-gray-100">
							<div className="aspect-w-16 aspect-h-9">
								<iframe
									width={"100%"}
									height={315}
									src="https://www.youtube.com/embed/EVQeOjNa2Ug?si=c84OpsDmjzH-jNFC"
									title="YouTube video player"
									allowfullscreen
								></iframe>
							</div>
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
									Nice view Of the Chittagong
								</h3>
								<span className="text-xs text-gray-600">January 21, 2023</span>
								<p>
									One of the city's most iconic landmarks is the Shrine of
									Bayazid Bostami, a revered site that attracts pilgrims and
									visitors alike. The shrine, surrounded by a serene pond
									inhabited by sacred turtles, offers a tranquil retreat amidst
									the city's hustle and bustle.
								</p>
							</div>
						</div>
						<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow hover:shadow-blue-300 border bg-gray-100">
							<div className="aspect-w-16 aspect-h-9">
								<iframe
									width={"100%"}
									height={315}
									src="https://www.youtube.com/embed/80IS21RmKJE?si=GMqg-5Xw2O131x2t"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
									Super cool view Of the Barisal
								</h3>
								<span className="text-xs text-gray-600">January 21, 2024</span>
								<p>
									One of the most iconic landmarks in Barisal is the Durga
									Sagar, the largest pond in southern Bangladesh. This serene
									body of water, surrounded by greenery, is a popular spot for
									picnics and boating. Another notable site is the Oxford
									Mission Church, an impressive colonial-era structure that
									stands as a testament to the city's rich historical past
								</p>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<button
							type="button"
							className="px-6 py-3 text-sm rounded-md hover:underline bg-blue-300 text-gray-600"
						>
							Load more posts...
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default OverView;
