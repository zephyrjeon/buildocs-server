import { Repository } from 'typeorm';
import { DI } from '../../../di/di';
import { User } from '../entities/User';
import { CreateUserInput } from '../schemas/createUserInput';
import { UpdateUserInput } from '../schemas/updateUserInput';

export class UserRepository {
  repo: Repository<User>;

  constructor(private di: DI) {
    this.repo = this.di.db.client.getRepository(User);
  }

  async create(input: CreateUserInput) {
    return this.repo.create(input).save();
  }

  async findAll() {
    return this.repo.find({ relations: { documents: true } });
  }

  async findOneById(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: { documents: { pages: true } },
    });
  }

  async update(input: UpdateUserInput) {
    const { id, ...rest } = input;

    const user = await this.findOneById(id);

    if (!user) throw Error('Not Found');

    const updated = { ...user, ...rest };

    await this.repo.save(Object.assign(user, rest));

    return updated;
  }

  delete(id: number) {
    return this.repo.delete({ id });
  }
}
