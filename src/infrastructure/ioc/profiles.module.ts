import { Module } from '@nestjs/common';
import { SupabaseProfileRepository } from '../repositories/supabase-profile.repository';
import { SupabaseModule } from '../supabase/supabase.module';
import { GetProfilesUseCase } from '../../application/use-cases/get-profiles.use-case';
import { CreateProfileUseCase } from '../../application/use-cases/create-profile.use-case';
import { ProfilesController } from '../../interfaces/controllers/profiles.controller';

@Module({
  imports: [SupabaseModule],
  controllers: [ProfilesController],
  providers: [
    {
      provide: 'IProfileRepository',
      useClass: SupabaseProfileRepository,
    },
    GetProfilesUseCase,
    CreateProfileUseCase,
  ],
  exports: ['IProfileRepository', GetProfilesUseCase, CreateProfileUseCase],
})
export class ProfilesModule {}
