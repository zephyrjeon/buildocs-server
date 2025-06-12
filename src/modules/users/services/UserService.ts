import { DI, di } from '../../../di/di';
import { CreateUserInput } from '../schemas/createUserInput';
import { UpdateUserInput } from '../schemas/updateUserInput';

export class UserService {
  constructor(private di: DI) {}

  get userRepo() {
    return this.di.repos.user;
  }

  async create(input: CreateUserInput) {
    return this.userRepo.create(input);
  }

  async list() {
    return this.userRepo.findAll();
  }

  async getById(id: number) {
    return this.userRepo.findOneById(id);
  }

  async update(input: UpdateUserInput) {
    return this.userRepo.update(input);
  }

  async delete(id: number) {
    return this.userRepo.delete(id);
  }
}

export const userService = new UserService(di);
