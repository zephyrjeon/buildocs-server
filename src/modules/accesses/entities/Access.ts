import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { CommonEntity } from '../../../common/entities/CommonEntity';
import { User } from '../../users/entities/User';

@Entity()
export class Access extends CommonEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  @Column()
  userId!: number;

  @ManyToOne(() => Document)
  @Column()
  documentId!: number;
}
