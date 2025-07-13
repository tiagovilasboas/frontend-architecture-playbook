// Exemplo real de entidade para Clean Architecture
export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private active: boolean = true
  ) {}

  isActive(): boolean {
    return this.active;
  }
} 