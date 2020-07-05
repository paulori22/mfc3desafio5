import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
