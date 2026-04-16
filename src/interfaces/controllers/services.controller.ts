import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { GetClientServicesUseCase } from '../../application/use-cases/services/get-client-services.use-case';
import { CreateServiceUseCase } from '../../application/use-cases/services/create-service.use-case';
import { AuthGuard } from '../../infrastructure/auth/auth.guard';
import { CurrentUser, JwtUser } from '../../infrastructure/auth/current-user.decorator';
import { CreateServiceDto } from '../../application/dtos/create-service.dto';

@Controller('services')
export class ServicesController {
  constructor(
    private readonly getClientServicesUseCase: GetClientServicesUseCase,
    private readonly createServiceUseCase: CreateServiceUseCase,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAllByClient(@CurrentUser() user: JwtUser) {
    return this.getClientServicesUseCase.execute(user.sub);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @CurrentUser() user: JwtUser,
    @Body() createServiceDto: CreateServiceDto,
  ) {
    return this.createServiceUseCase.execute(user.sub, createServiceDto);
  }
}
