export class CreateServiceDto {
  category_id: string;
  title: string;
  description: string;
  address: string;
  city: string;
  latitude?: number;
  longitude?: number;
  budget_min: number;
  budget_max: number;
  scheduled_at: string;
}
