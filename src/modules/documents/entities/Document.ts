import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonEntity } from '../../../common/entities/CommonEntity';
import { Access } from '../../accesses/entities/Access';
import { Page } from '../../pages/entities/Page';
import { User } from '../../users/entities/User';

@Entity()
export class Document extends CommonEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  title!: string;

  @Column()
  order!: number;

  @ManyToOne(() => User, (user) => user.documents)
  owner!: User;

  @OneToMany(() => Page, (page) => page.document)
  pages!: Page[];

  @OneToMany(() => Access, (access) => access.document)
  accesses!: Access[];
}
