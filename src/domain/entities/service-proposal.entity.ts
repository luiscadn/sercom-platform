export class ServiceProposal {
  constructor(
    public readonly id: string,
    public missionId: string,
    public profileId: string,
    public description: string,
    public proposedPrice: number,
    public status: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
