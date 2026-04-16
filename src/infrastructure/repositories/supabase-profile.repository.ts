import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IProfileRepository } from '../../domain/repositories/profile.repository.interface';
import { Profile } from '../../domain/entities/profile.entity';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class SupabaseProfileRepository implements IProfileRepository {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll(): Promise<Profile[]> {
    const { data, error } = await this.supabaseService.sb
      .from('profiles')
      .select('*')
      .limit(20);

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }

  async create(profile: Partial<Profile>): Promise<Profile> {
    const { data, error } = await this.supabaseService.sb
      .from('profiles')
      .insert(profile)
      .select()
      .single();

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return data;
  }
}
