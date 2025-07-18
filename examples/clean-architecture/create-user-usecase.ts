// Exemplo real de use case para Clean Architecture
import { User } from './user-entity';

export interface UserRepository {
  save(user: User): Promise<User>;
}

export class CreateUserUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(data: {
    id: string;
    name: string;
    email: string;
  }): Promise<User> {
    // Validações e regras de negócio
    const user = new User(data.id, data.name, data.email);
    return this.userRepo.save(user);
  }
}
