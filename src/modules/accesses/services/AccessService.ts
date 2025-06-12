import { DI, di } from '../../../di/di';
import { CreateAccessInput } from '../schemas/createAccessInput';
import { UpdateAccessInput } from '../schemas/updateAccessInput';

export class AccessService {
  constructor(private di: DI) {}

  get accessRepo() {
    return this.di.repos.access;
  }

  async create(input: CreateAccessInput) {
    return this.accessRepo.create(input);
  }

  async getListByUserId(userId: number) {
    return this.accessRepo.findAllByUserId(userId);
  }

  async getListByDocumetId(documentId: number) {
    return this.accessRepo.findAllByDocumentId(documentId);
  }

  async getById(id: number) {
    return this.accessRepo.findById(id);
  }

  async update(input: UpdateAccessInput) {
    return this.accessRepo.update(input);
  }

  async delete(id: number) {
    return this.accessRepo.delete(id);
  }
}

export const accessService = new AccessService(di);
