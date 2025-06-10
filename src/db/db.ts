import { DataSource } from 'typeorm';
import { User } from '../modules/users/entities/User';
import { Document } from '../modules/documents/entities/Document';
import { Page } from '../modules/pages/entities/Page';
import { Access } from '../modules/accesses/entities/Access';

export class DB {
  client = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    // username: 'test',
    // password: 'test',
    database: 'buildocs',
    entities: [User, Document, Page, Access],
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
