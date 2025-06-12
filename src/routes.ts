import { Application } from 'express';
import { createUser } from './modules/users/controllers/createUser';
import { getUsers } from './modules/users/controllers/getUsers';
import { getUserById } from './modules/users/controllers/getUserById';
import { updateUser } from './modules/users/controllers/updateUser';
import { deleteUser } from './modules/users/controllers/deleteUser';
import { createDocument } from './modules/documents/controllers/createDocument';
import { updateDocument } from './modules/documents/controllers/updateDocument';
import { deleteDocument } from './modules/documents/controllers/deleteDocument';
import { getDocumentById } from './modules/documents/controllers/getDocumentById';
import { getDocumentListByOwnerId } from './modules/documents/controllers/getDocumentListByOwnerId';
import { getPageListByDocumentId } from './modules/pages/controllers/getPageListByDocumentId';
import { getPageById } from './modules/pages/controllers/getPageById';
import { createPage } from './modules/pages/controllers/createPage';
import { updatePage } from './modules/pages/controllers/updatePage';
import { deletePage } from './modules/pages/controllers/deletePage';
import { getAccessListByUserId } from './modules/accesses/controllers/getAccessListByUserId';
import { getAccessListByDocumentId } from './modules/accesses/controllers/getAccessListByDocumentId';
import { createAccess } from './modules/accesses/controllers/createAccess';
import { updateAccess } from './modules/accesses/controllers/updateAccess';
import { deleteAccess } from './modules/accesses/controllers/deleteAccess';

export const appRoutes = (app: Application) => {
  const basePath = (v: number) => `/api/v${v}`;

  app.get(basePath(1) + '/health', (req, res) => {
    res.status(200);
  });
  // users
  app.get(basePath(1) + '/me', () => {}); // get current users
  app.get(basePath(1) + '/users', getUsers); // get a user list
  app.get(basePath(1) + '/users/:id', getUserById); // get a user by id
  app.post(basePath(1) + '/users', createUser); // create a user
  app.post(basePath(1) + '/users/:id', updateUser); // update a user
  app.delete(basePath(1) + '/users/:id', deleteUser); // delete a user
  // documents
  app.get(basePath(1) + '/documents', getDocumentListByOwnerId); // get documents of current user
  app.get(basePath(1) + '/documents/:id', getDocumentById); // get a document
  app.post(basePath(1) + '/documents', createDocument); // create a document
  app.post(basePath(1) + '/documents/:id', updateDocument); // update a document
  app.delete(basePath(1) + '/documents/:id', deleteDocument); // delete a document
  // pages
  app.get(basePath(1) + '/pages', getPageListByDocumentId); // get pages of a document
  app.get(basePath(1) + '/pages/:id', getPageById); // get a page
  app.post(basePath(1) + '/pages', createPage); // create a page
  app.post(basePath(1) + '/pages/:id', updatePage); // update a page
  app.delete(basePath(1) + '/pages/:id', deletePage); // delete a page
  // accesses
  app.get(basePath(1) + '/users/:id/accesses/documents', getAccessListByUserId); // get documents shared with a user
  app.get(
    basePath(1) + '/documents/:id/accesses/users',
    getAccessListByDocumentId
  ); // get users with access to a document
  app.post(basePath(1) + '/accesses', createAccess); // create an access to a document
  app.post(basePath(1) + '/accesses/:id', updateAccess); // update an access
  app.delete(basePath(1) + '/accesses/:id', deleteAccess); // delete an access
};
