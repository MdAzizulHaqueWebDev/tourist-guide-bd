/** @format */

import { useState } from "react";
import SectionTitle from "../../../shared/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurPackage from "./OurPackage";
import TourGuides from "./TourGuides";
import OverView from "./OverView";
const Tourism = () => {
	const [tabIndex, setTabIndex] = useState(0);
	return (
		<>
			<SectionTitle
				heading={"Tourism and Travel Guide"}
				subheading={"Let's Checkout"}
				my="14"
			/>

			<Tabs
				className="container mx-auto"
				selectedIndex={tabIndex}
				onSelect={(index) => setTabIndex(index)}
			>
				<TabList role="tablist" className="tabs md:font-bold font-s md:text-xl tabs-lifted text-center">
					<Tab
						role="tab"
						className={`tab ${
							tabIndex == 0 &&
							"tab-active [--tab-bg:lightblue]  [--tab-border-color:#EA738D]"
						} `}
					>
						Overview
					</Tab>
					<Tab
						role="tab"
						className={`tab ${
							tabIndex == 1 &&
							"tab-active  [--tab-bg:lightblue]  [--tab-border-color:#EA738D]"
						} `}
					>
						Our Packages
					</Tab>
					<Tab
						role="tab"
						className={`tab ${
							tabIndex == 2 &&
							" tab-active [--tab-bg:lightblue]  [--tab-border-color:#EA738D]"
						} `}
					>
						Meet Tour Guide
					</Tab>
				</TabList>
				<TabPanel>
					<OverView />
				</TabPanel>
				<TabPanel>
					<OurPackage />
				</TabPanel>
				<TabPanel>
					<TourGuides />
				</TabPanel>
			</Tabs>
		</>
	);
};

export default Tourism;
