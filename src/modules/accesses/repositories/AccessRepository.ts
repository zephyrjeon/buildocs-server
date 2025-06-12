import { Repository } from 'typeorm';
import { DI } from '../../../di/di';
import { Access } from '../entities/Access';
import { CreateAccessInput } from '../schemas/createAccessInput';
import { UpdateAccessInput } from '../schemas/updateAccessInput';

export class AccessRepository {
  repo: Repository<Access>;

  constructor(private di: DI) {
    this.repo = this.di.db.client.getRepository(Access);
  }

  async create(input: CreateAccessInput) {
    const { userId, documentId, privilege } = input;
    return this.repo
      .create({
        user: { id: userId },
        document: { id: documentId },
        privilege,
      })
      .save();
  }

  async findAllByDocumentId(documentId: number) {
    return this.repo.find({
      where: {
        document: { id: documentId },
      },
      relations: {
        user: true,
      },
    });
  }

  async findAllByUserId(userId: number) {
    return this.repo.find({
      where: {
        user: { id: userId },
      },
      relations: {
        document: true,
      },
    });
  }

  async findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async update(input: UpdateAccessInput) {
    const { id, ...rest } = input;

    const access = await this.findById(id);

    if (!access) throw Error('Not Found');

    const updated = { ...access, ...rest };

    await this.repo.save(Object.assign(access, rest));

    return updated;
  }

  delete(id: number) {
    return this.repo.delete({ id });
  }
}
