import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from '../../../common/entities/CommonEntity';
import { Document } from '../../documents/entities/Document';
import { User } from '../../users/entities/User';

@Entity()
export class Access extends CommonEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Document)
  document!: Document;
}
