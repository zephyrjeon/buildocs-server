import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonEntity } from '../../../common/entities/CommonEntity';
import { Page } from '../../pages/entities/Page';
import { User } from '../../users/entities/User';

@Entity()
export class Document extends CommonEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  order!: number;

  @ManyToOne(() => User, (user) => user.documents)
  @Column()
  authorId!: number;

  @OneToMany(() => Page, (page) => page.documentId)
  @Column()
  pages!: Page[];
}
