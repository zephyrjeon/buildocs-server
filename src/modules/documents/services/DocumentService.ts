import { di, DI } from '../../../di/di';
import { UpdateDocumentInput } from '../schemas/updateDocumentInput';

export class DocumentService {
  constructor(private di: DI) {}

  private get documentRepo() {
    return this.di.repos.document;
  }

  private get userRepo() {
    return this.di.repos.user;
  }

  async create(ownerId: number) {
    const owner = await this.userRepo.findOneById(ownerId);

    if (!owner) throw new Error('User Not Found');

    const order = owner?.documents?.length ?? 0;

    // TODO: create a main page

    return this.documentRepo.create({ owner, order });
  }

  async getListByOwnerId(ownerId: number) {
    return this.documentRepo.findAllByOwnerId(ownerId);
  }

  async getById(id: number) {
    return this.documentRepo.findOneById(id);
  }

  async update(input: UpdateDocumentInput) {
    return this.documentRepo.update(input);
  }

  async delete(id: number) {
    // TODO: Reorder document orders after deletion

    return this.documentRepo.delete(id);
  }
}

export const documentService = new DocumentService(di);
