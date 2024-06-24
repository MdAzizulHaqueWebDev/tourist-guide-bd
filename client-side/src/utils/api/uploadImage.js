/** @format */

import axios from "axios";

export const uploadImage = async (img) => {
	// const imgBBKey = import.meta.env.IMGBB_API_KEY;
	// todo: secure api key
	const binaryImg = new FormData();
	binaryImg.append("image", img);
	const { data } = await axios.post(
		`https://api.imgbb.com/1/upload?key=2916cf857f43fe7aafb1865d0183ff06`,
		binaryImg,
	);
	return data;
};
