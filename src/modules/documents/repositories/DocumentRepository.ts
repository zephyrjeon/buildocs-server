import { Repository } from 'typeorm';
import { DI } from '../../../di/di';
import { Document } from '../entities/Document';
import { UpdateDocumentInput } from '../schemas/updateDocumentInput';
import { User } from '../../users/entities/User';

export class DocumentRepository {
  repo: Repository<Document>;

  constructor(private di: DI) {
    this.repo = this.di.db.client.getRepository(Document);
  }

  async create({ owner, order }: { owner: User; order: number }) {
    return this.repo.create({ owner, order }).save();
  }

  async findAllByOwnerId(ownerId: number) {
    return this.repo.find({
      where: { owner: { id: ownerId } },
      relations: {
        owner: true,
        pages: true,
        accesses: true,
      },
    });
  }

  async findOneById(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: {
        owner: true,
        pages: true,
        accesses: true,
      },
    });
  }

  async update(input: UpdateDocumentInput) {
    const { id, ...rest } = input;

    const document = await this.findOneById(id);

    if (!document) throw Error('Not Found');

    const updated = { ...document, ...rest };

    await this.repo.save(Object.assign(document, rest));

    return updated;
  }

  delete(id: number) {
    return this.repo.delete({ id });
  }
}
