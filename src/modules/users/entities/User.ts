import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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

  @OneToMany(() => Document, (document) => document.authorId)
  @Column()
  documents!: Document[];
}
