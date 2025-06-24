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

  async create({ user, order }: { user: User; order: number }) {
    return this.repo.create({ user, order }).save();
  }

  async findAllByUserId(userId: number) {
    return this.repo.find({
      where: { user: { id: userId } },
      relations: {
        user: true,
        pages: true,
        accesses: true,
      },
    });
  }

  async findOneById(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: {
        user: true,
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
