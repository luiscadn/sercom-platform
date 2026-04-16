import { Injectable, Inject } from '@nestjs/common';
import { IProfileRepository } from '../../domain/repositories/profile.repository.interface';
import { CreateProfileDto } from '../dtos/create-profile.dto';
import { Profile } from '../../domain/entities/profile.entity';

@Injectable()
export class CreateProfileUseCase {
  constructor(
    @Inject('IProfileRepository')
    private readonly profileRepository: IProfileRepository,
  ) {}

  async execute(dto: CreateProfileDto): Promise<Profile> {
    return this.profileRepository.create(dto);
  }
}
