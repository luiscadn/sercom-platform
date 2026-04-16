import { Service } from '../entities/service.entity';

export interface IServiceRepository {
  create(service: Partial<Service>): Promise<Service>;
  addStatusHistory(
    serviceId: string,
    status: string,
    changedBy: string,
    note: string,
  ): Promise<void>;
  findByClientId(clientId: string): Promise<Service[]>;
  findByIdAndClientId(id: string, clientId: string): Promise<Service | null>;
}
