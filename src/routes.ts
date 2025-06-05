import { Application } from 'express';
import { createUser } from './modules/users/controllers/createUser';
import { getUsers } from './modules/users/controllers/getUsers';
import { getUserById } from './modules/users/controllers/getUserById';
import { updateUser } from './modules/users/controllers/updateUser';
import { deleteUser } from './modules/users/controllers/deleteUser';

export const appRoutes = (app: Application) => {
  const basePath = (v: number) => `/api/v${v}`;

  app.get(basePath(1) + '/health', () => {});
  // users
  app.get(basePath(1) + '/me', () => {}); // get current users
  app.get(basePath(1) + '/users', getUsers); // get a user list
  app.get(basePath(1) + '/users/:id', getUserById); // get a user by id
  app.post(basePath(1) + '/users', createUser); // create a user
  app.post(basePath(1) + '/users/:id', updateUser); // update a user
  app.delete(basePath(1) + '/users/:id', deleteUser); // delete a user
  // documents
  app.get(basePath(1) + '/documents', () => {}); // get documents of current user
  app.get(basePath(1) + '/documents/:id', () => {}); // get a document
  app.post(basePath(1) + '/documents', () => {}); // create a document
  app.post(basePath(1) + '/documents/:id', () => {}); // update a document
  app.delete(basePath(1) + '/documents/:id', () => {}); // delete a document
  // pages
  app.get(basePath(1) + '/pages', () => {}); // get pages of a document
  app.get(basePath(1) + '/pages/:id', () => {}); // get a page
  app.post(basePath(1) + '/pages', () => {}); // create a page
  app.post(basePath(1) + '/pages/:id', () => {}); // update a page
  app.delete(basePath(1) + '/pages/:id', () => {}); // delete a page
  // accesses
  app.get(basePath(1) + '/users/:id/accesses', () => {}); // get documents shared with a user
  app.get(basePath(1) + '/documents/:id/accesses', () => {}); // get accesses of a document
  app.post(basePath(1) + '/accesses', () => {}); // create an access to a document
  app.post(basePath(1) + '/accesses/:id', () => {}); // update an access
  app.delete(basePath(1) + '/accesses/:id', () => {}); // delete an access
};
