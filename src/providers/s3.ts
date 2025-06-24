import { DI } from '../di/di';

export class S3Provider {
  aws = require('aws-sdk');
  s3 = new this.aws.S3();

  constructor(di: DI) {
    this.aws.config.update({
      accessKeyId: di.appConfigs!.AWS_ACCESS_KEY_ID,
      secretAccessKey: di.appConfigs!.AWS_SECRET_ACCESS_KEY,
      region: di.appConfigs!.AWS_REGION,
    });
  }

  async uploadBlocks(key: string | number, body: string) {
    const params = {
      Bucket: 'buildocs',
      Key: `blocks/${key}`, // File path inside S3
      Body: body,
      ContentType: 'application/json',
    };

    await this.s3.upload(params, (err: any, data: any) => {
      if (err) {
        throw new Error(`Upload failed: ${err}`);
      } else {
        console.log('File uploaded successfully!', data);
        return true;
      }
    });
  }

  async readBlocks(key: string | number) {
    const params = { Bucket: 'buildocs', Key: `blocks/${key}` };

    const result = await this.s3
      .getObject(params, function (err: any, data: any) {
        if (err) {
          throw new Error(`Read failed: ${err}`);
        }
      })
      .promise();

    return JSON.parse(result.Body.toString('utf-8'));
  }
}
