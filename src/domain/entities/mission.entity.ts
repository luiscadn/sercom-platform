export class Mission {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public status: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
