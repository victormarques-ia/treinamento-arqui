import { EntityRepository, Repository } from 'typeorm';
import Users from '../entities/Users';

@EntityRepository(Users)
export default class UsersRepository extends Repository<Users> {
  async createUser(user: Users): Promise<Users> {
    const result = this.create(user);

    await this.save(result);

    return result;
  }
}
