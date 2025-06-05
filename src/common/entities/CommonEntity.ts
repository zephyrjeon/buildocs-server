import moment from 'moment';
import { BaseEntity, BeforeInsert, BeforeUpdate, Column } from 'typeorm';

export class CommonEntity extends BaseEntity {
  @Column({ type: 'timestamp', comment: 'created at' })
  createdAt!: Date;

  @Column({ type: 'timestamp', comment: 'updated at' })
  updatedAt!: Date;

  @BeforeInsert()
  updateDatesForInsert() {
    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }

  // https://github.com/typeorm/typeorm/issues/5131#issuecomment-1030895756
  @BeforeUpdate()
  updateDatesForUpdate() {
    this.updatedAt = new Date();
  }
}
