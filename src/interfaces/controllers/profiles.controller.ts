import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { GetProfilesUseCase } from '../../application/use-cases/get-profiles.use-case';
import { CreateProfileUseCase } from '../../application/use-cases/create-profile.use-case';
import { AuthGuard } from '../../infrastructure/auth/auth.guard';
import { CreateProfileDto } from '../../application/dtos/create-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(
    private readonly getProfilesUseCase: GetProfilesUseCase,
    private readonly createProfileUseCase: CreateProfileUseCase,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.getProfilesUseCase.execute();
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createProfileDto: CreateProfileDto) {
    return this.createProfileUseCase.execute(createProfileDto);
  }
}
