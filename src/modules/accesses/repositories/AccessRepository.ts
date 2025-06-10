import { Repository } from 'typeorm';
import { DI, di } from '../../../di/di';
import { Access } from '../entities/Access';
import { CreateUserInput } from '../schemas/createUserInput';
import { UpdateUserInput } from '../schemas/updateUserInput';

export class AccessRepository {
  repo: Repository<Access>;

  constructor(private di: DI) {
    this.repo = this.di.db.client.getRepository(Access);
  }

  async create(input: CreateUserInput) {
    return this.repo.create().save();
  }

  async findAll() {
    return this.repo.find();
  }

  async findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async update(input: UpdateUserInput) {
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
