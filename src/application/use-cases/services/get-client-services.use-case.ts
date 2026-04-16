import { Injectable, Inject } from '@nestjs/common';
import { IServiceRepository } from '../../domain/repositories/service.repository.interface';
import { Service } from '../../domain/entities/service.entity';

@Injectable()
export class GetClientServicesUseCase {
  constructor(
    @Inject('IServiceRepository')
    private readonly serviceRepository: IServiceRepository,
  ) {}

  async execute(clientId: string): Promise<Service[]> {
    return this.serviceRepository.findByClientId(clientId);
  }
}
