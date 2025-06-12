import * as dotenv from 'dotenv';
import path from 'path';

function getAppConfigs() {
  if (!process.env.NODE_ENV) {
    throw new Error('NODE_ENV is undefined');
  }

  const envPath = path.join(__dirname, `../../.env`);

  const { parsed, error } = dotenv.config({ path: envPath });

  if (error) {
    throw new Error(JSON.stringify(error));
  }

  return parsed;
}

export const appConfigs = getAppConfigs();
