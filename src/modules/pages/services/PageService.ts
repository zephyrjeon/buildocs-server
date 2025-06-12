import { DI, di } from '../../../di/di';
import { CreatePageInput } from '../schemas/createPageInput';
import { UpdatePageInput } from '../schemas/updatePageInput';

export class PageService {
  constructor(private di: DI) {}

  private get pageRepo() {
    return this.di.repos.page;
  }

  private get documentRepo() {
    return this.di.repos.document;
  }

  async create(input: CreatePageInput) {
    const document = await this.documentRepo.findOneById(input.documentId);
    const order = document?.pages?.length ?? 0;
    const blocksS3Link = '';

    return this.pageRepo.create({ ...input, order, blocksS3Link });
  }

  async getListByDocumentId(documentId: number) {
    return this.pageRepo.findAllByDocumentId(documentId);
  }

  async getById(id: number) {
    return this.pageRepo.findById(id);
  }

  async update(input: UpdatePageInput) {
    return this.pageRepo.update(input);
  }

  async delete(id: number) {
    // TODO: Reorder page orders after deletion

    return this.pageRepo.delete(id);
  }
}

export const pageService = new PageService(di);
