import { Module } from '@nestjs/common';
import { SupabaseServiceRepository } from '../repositories/supabase-service.repository';
import { SupabaseModule } from '../supabase/supabase.module';
import { GetClientServicesUseCase } from '../../application/use-cases/services/get-client-services.use-case';
import { CreateServiceUseCase } from '../../application/use-cases/services/create-service.use-case';
import { ServicesController } from '../../interfaces/controllers/services.controller';

@Module({
  imports: [SupabaseModule],
  controllers: [ServicesController],
  providers: [
    {
      provide: 'IServiceRepository',
      useClass: SupabaseServiceRepository,
    },
    GetClientServicesUseCase,
    CreateServiceUseCase,
  ],
  exports: ['IServiceRepository', GetClientServicesUseCase, CreateServiceUseCase],
})
export class ServicesModule {}
