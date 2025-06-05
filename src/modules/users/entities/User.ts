import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from '../../../common/entities/CommonEntity';
import { Document } from '../../documents/entities/Document';

@Entity()
export class User extends CommonEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @OneToMany(() => Document, (document) => document.author)
  documents!: Document[];
}
