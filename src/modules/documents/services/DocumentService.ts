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

  async create(userId: number) {
    const user = await this.userRepo.findOneById(userId);

    if (!user) throw new Error('User Not Found');

    const order = user?.documents?.length ?? 0;

    // TODO: create a main page

    return this.documentRepo.create({ user, order });
  }

  async getListByUserId(userId: number) {
    return this.documentRepo.findAllByUserId(userId);
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
