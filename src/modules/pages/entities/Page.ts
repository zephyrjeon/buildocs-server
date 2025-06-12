import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from '../../../common/entities/CommonEntity';
import { Document } from '../../documents/entities/Document';
import { User } from '../../users/entities/User';

@Entity()
export class Page extends CommonEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  title!: string;

  @Column()
  order!: number;

  @Column()
  blocksS3Link!: string;

  @ManyToOne(() => User)
  owner!: User;

  @ManyToOne(() => Document, (document) => document.pages)
  document!: Document;
}
