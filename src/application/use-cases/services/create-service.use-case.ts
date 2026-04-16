import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { IServiceRepository } from '../../domain/repositories/service.repository.interface';
import { CreateServiceDto } from '../dtos/create-service.dto';
import { Service } from '../../domain/entities/service.entity';

@Injectable()
export class CreateServiceUseCase {
  constructor(
    @Inject('IServiceRepository')
    private readonly serviceRepository: IServiceRepository,
  ) {}

  async execute(
    clientId: string,
    createServiceDto: CreateServiceDto,
  ): Promise<Service> {
    if (createServiceDto.budget_min > createServiceDto.budget_max) {
      throw new BadRequestException('El presupuesto mínimo no puede ser mayor al máximo');
    }

    const serviceData = {
      clientId,
      categoryId: createServiceDto.category_id,
      title: createServiceDto.title,
      description: createServiceDto.description,
      address: createServiceDto.address,
      city: createServiceDto.city,
      latitude: createServiceDto.latitude ?? null,
      longitude: createServiceDto.longitude ?? null,
      budgetMin: createServiceDto.budget_min,
      budgetMax: createServiceDto.budget_max,
      scheduledAt: new Date(createServiceDto.scheduled_at),
      status: 'requested',
    };

    const newService = await this.serviceRepository.create(serviceData);

    await this.serviceRepository.addStatusHistory(
      newService.id,
      'requested',
      clientId,
      'Servicio creado por el cliente',
    );

    return newService;
  }
}
