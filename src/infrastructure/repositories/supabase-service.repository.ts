import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IServiceRepository } from '../../domain/repositories/service.repository.interface';
import { Service } from '../../domain/entities/service.entity';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class SupabaseServiceRepository implements IServiceRepository {
  constructor(private readonly supabaseService: SupabaseService) {}

  private mapToDomain(row: any): Service {
    return new Service(
      row.id,
      row.client_id,
      row.category_id,
      row.title,
      row.description,
      row.address,
      row.city,
      row.latitude,
      row.longitude,
      row.budget_min,
      row.budget_max,
      row.scheduled_at,
      row.status,
      row.created_at,
      row.updated_at,
    );
  }

  async create(service: Partial<Service>): Promise<Service> {
    const { data, error } = await this.supabaseService.sb
      .from('services')
      .insert({
        client_id: service.clientId,
        category_id: service.categoryId,
        title: service.title,
        description: service.description,
        address: service.address,
        city: service.city,
        latitude: service.latitude,
        longitude: service.longitude,
        budget_min: service.budgetMin,
        budget_max: service.budgetMax,
        scheduled_at: service.scheduledAt?.toISOString(),
        status: service.status || 'requested',
      })
      .select()
      .single();

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return this.mapToDomain(data);
  }

  async addStatusHistory(
    serviceId: string,
    status: string,
    changedBy: string,
    note: string,
  ): Promise<void> {
    const { error } = await this.supabaseService.sb
      .from('service_status_history')
      .insert({
        service_id: serviceId,
        status,
        changed_by: changedBy,
        note,
      });

    if (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findByClientId(clientId: string): Promise<Service[]> {
    const { data, error } = await this.supabaseService.sb
      .from('services')
      .select('*')
      .eq('client_id', clientId);

    if (error) {
      throw new InternalServerErrorException(error.message);
    }

    return (data || []).map(this.mapToDomain);
  }

  async findByIdAndClientId(id: string, clientId: string): Promise<Service | null> {
    const { data, error } = await this.supabaseService.sb
      .from('services')
      .select('*')
      .eq('id', id)
      .eq('client_id', clientId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // No rows found
      throw new InternalServerErrorException(error.message);
    }

    return data ? this.mapToDomain(data) : null;
  }
}
