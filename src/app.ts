import { Event } from "@aws-sdk/client-s3";

const url = "https://aws.amazon.com/";

// cycle through each link provided
// use a case statement to break it down for each one based on the id prop
// download the previous version of the file
// compare against the current one
// send off the diff to discord.

export const handler = async (event: Event) => {
	try {
		// fetch is available with Node.js 18
		const res = await fetch(url);
		console.info("status", res.status);
		return res.status;
	} catch (e) {
		console.error(e);
		return 500;
	}
};
