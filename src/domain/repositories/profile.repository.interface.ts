import { Profile } from '../entities/profile.entity';

export interface IProfileRepository {
  findAll(): Promise<Profile[]>;
  create(profile: Partial<Profile>): Promise<Profile>;
}
