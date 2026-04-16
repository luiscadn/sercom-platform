import { Injectable, Inject } from '@nestjs/common';
import { IProfileRepository } from '../../domain/repositories/profile.repository.interface';
import { Profile } from '../../domain/entities/profile.entity';

@Injectable()
export class GetProfilesUseCase {
  constructor(
    @Inject('IProfileRepository')
    private readonly profileRepository: IProfileRepository,
  ) {}

  async execute(): Promise<Profile[]> {
    return this.profileRepository.findAll();
  }
}
