import { Repository } from 'typeorm';
import { DI } from '../../../di/di';
import { Page } from '../entities/Page';
import { CreatePageInput } from '../schemas/createPageInput';
import { UpdatePageInput } from '../schemas/updatePageInput';

export class PageRepository {
  repo: Repository<Page>;

  constructor(private di: DI) {
    this.repo = this.di.db.client.getRepository(Page);
  }

  async create(
    input: CreatePageInput & { blocksS3Key: string; order: number }
  ) {
    const { ownerId, documentId, ...rest } = input;
    return this.repo
      .create({
        owner: { id: ownerId },
        document: { id: documentId },
        ...rest,
      })
      .save();
  }

  async findAllByDocumentId(documentId: number) {
    return this.repo.find({
      where: { document: { id: documentId } },
      relations: {
        owner: true,
        document: true,
      },
    });
  }

  async findById(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: {
        owner: true,
        document: true,
      },
    });
  }

  async update(input: UpdatePageInput & { blocksS3Key?: string }) {
    const { id, ...rest } = input;

    const page = await this.findById(id);

    if (!page) throw Error('Not Found');

    const updated = { ...page, ...rest };

    await this.repo.save(Object.assign(page, rest));

    return updated;
  }

  delete(id: number) {
    return this.repo.delete({ id });
  }
}
