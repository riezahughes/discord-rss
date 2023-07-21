import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({});

const getFileFromS3 = async (key: string) => {
	const command = new GetObjectCommand({
		Bucket: process.env.AWS_S3_BUCKET_NAME,
		Key: key
	});

	try {
		const response = await client.send(command);

		if (!response?.Body) {
			throw new Error("No Body in s3 response");
		}
		// The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
		const str = await response.Body.transformToString();
		console.log(str);
	} catch (err) {
		console.error(err);
	}
};

export default getFileFromS3;
