export class Service {
  constructor(
    public readonly id: string,
    public clientId: string,
    public categoryId: string,
    public title: string,
    public description: string,
    public address: string,
    public city: string,
    public latitude: number | null,
    public longitude: number | null,
    public budgetMin: number,
    public budgetMax: number,
    public scheduledAt: Date,
    public status: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
