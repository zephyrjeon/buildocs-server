import { DB } from '../db/db';
import { AccessRepository } from '../modules/accesses/repositories/AccessRepository';
import { DocumentRepository } from '../modules/documents/repositories/DocumentRepository';
import { PageRepository } from '../modules/pages/repositories/PageRepository';
import { UserRepository } from '../modules/users/repositories/UserRepository';

class _DI {
  private _db = new DB();
  private _repos = {
    user: new UserRepository(this),
    document: new DocumentRepository(this),
    page: new PageRepository(this),
    access: new AccessRepository(this),
  };

  get db() {
    return this._db;
  }

  get repos() {
    return this._repos;
  }
}

export const di = new _DI();
export type DI = typeof di;
