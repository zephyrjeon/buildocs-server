import { DI, di } from '../../../di/di';
import { CreatePageInput } from '../schemas/createPageInput';
import { UpdatePageInput } from '../schemas/updatePageInput';
import { v4 as uuidv4 } from 'uuid';

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

    const body = JSON.stringify({ test: 'testBlocks' });
    const key = uuidv4();

    this.di.providers.s3.uploadBlocks(key, body);

    return this.pageRepo.create({ ...input, order, blocksS3Key: key });
  }

  async getListByDocumentId(documentId: number) {
    return this.pageRepo.findAllByDocumentId(documentId);
  }

  async getById(id: number) {
    const page = await this.pageRepo.findById(id);
    if (!page) throw new Error('Not found');

    const blocks = await this.di.providers.s3.readBlocks(page.blocksS3Key);

    const pageWithBlocks = { ...page, blocks };

    return pageWithBlocks;
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
