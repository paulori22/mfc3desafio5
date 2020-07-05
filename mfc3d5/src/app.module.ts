import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AulasModule } from './aulas/aulas.module';
import { AulasService } from './aulas/aulas/aulas.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AulasModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
