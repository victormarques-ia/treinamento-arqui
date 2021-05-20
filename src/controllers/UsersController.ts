import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';

class UsersController {
  async create(request: Request, response: Response) {
    const usersRepository = getCustomRepository(UsersRepository);

    const data = request.body;

    const user = await usersRepository.createUser(data);

    return response.status(201).json(user);
  }
}

export default new UsersController();
