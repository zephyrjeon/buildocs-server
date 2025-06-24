import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import { appConfigs } from './configs/getAppConfigs';
import { di } from './di/di';
import { appRoutes } from './routes';

const app = express();

const startServer = async () => {
  console.log('App Configs: ', appConfigs);

  await di.db.connect();

  app.use(cors({}));
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  appRoutes(app);

  app.listen({ port: 3000 }, () => {
    console.log(`🚀 Server ready at ${3000}`);
  });
};

startServer();
