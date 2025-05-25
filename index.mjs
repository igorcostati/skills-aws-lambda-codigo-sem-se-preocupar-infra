import { log } from "./log.mjs";
import { S3 } from "@aws-sdk/client-s3";

const s3Client = new S3({
    region: process.env.AWS_REGION
});

export const handler = async (event) => {
    const record = event.Records[0];
    const bucket = record.s3.bucket.name;
    const key = record.s3.object.key;

    const getObjectResult = await s3Client.getObject({
        Bucket: bucket,
        Key: key
    });

    const mega_bytes = 1024 * 1024;

    if (getObjectResult.ContentLength > 1 * mega_bytes) {
        log("Arquivo muito grande", event);
        return response;
    };
    log("Objeto tamanho correto", event);
    return "Objeto tamanho correto";
};
