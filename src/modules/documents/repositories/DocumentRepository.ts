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

  async create({ author, order }: { author: User; order: number }) {
    return this.repo.create({ author, order }).save();
  }

  async findAll() {
    return this.repo.find();
  }

  async findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async update(input: UpdateDocumentInput) {
    const { id, ...rest } = input;

    const user = await this.findById(id);

    if (!user) throw Error('Not Found');

    const updated = { ...user, ...rest };

    await this.repo.save(Object.assign(user, rest));

    return updated;
  }

  delete(id: number) {
    return this.repo.delete({ id });
  }
}
