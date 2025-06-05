import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from '../../../common/entities/CommonEntity';
import { Document } from '../../documents/entities/Document';
import { User } from '../../users/entities/User';

@Entity()
export class Page extends CommonEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  order!: number;

  @Column()
  blocks!: string;

  @Column()
  blocksS3Link!: string;

  @ManyToOne(() => User)
  @Column()
  authorId!: number;

  @ManyToOne(() => Document, (document) => document.pages)
  @Column()
  documentId!: number;
}
