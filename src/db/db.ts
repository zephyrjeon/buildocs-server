import { DataSource } from 'typeorm';
import { User } from '../modules/users/entities/User';

export class DB {
  client = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    // username: 'test',
    // password: 'test',
    database: 'buildocs',
    entities: [User],
    synchronize: true, // for development only
  });

  connect() {
    this.client
      .initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch((err) => {
        console.error('Error during Data Source initialization', err);
      });
  }
}

export const db = new DB();
