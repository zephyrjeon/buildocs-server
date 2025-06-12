import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonEntity } from '../../../common/entities/CommonEntity';
import { Document } from '../../documents/entities/Document';
import { User } from '../../users/entities/User';
import { ACCESS_PRIVILEGE } from '../../../common/enums';

@Entity()
@Index(['user', 'document'], { unique: true })
export class Access extends CommonEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Document)
  document!: Document;

  @Column({
    type: 'enum',
    enum: ACCESS_PRIVILEGE,
    default: ACCESS_PRIVILEGE.READ,
  })
  privilege!: ACCESS_PRIVILEGE;
}
