import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Render,
} from '@nestjs/common';
import { Aula } from '../aulas.entity';
import { AulasService } from './aulas.service';

@Controller('maratona')
export class AulasController {
  constructor(private aulasService: AulasService) {}
  @Get('/list')
  index(): Promise<Aula[]> {
    return this.aulasService.findAll();
  }
  @Get()
  @Render('aulas_list')
  async lista_aulas() {
    const aulas = await this.aulasService.findAll();
    return { layout: false, aulas };
  }

  @Post('/create')
  async create(@Body() aulaData: Aula): Promise<any> {
    return this.aulasService.create(aulaData);
  }
  @Put('/update:id')
  async update(@Param('id') id, @Body() aulaData: Aula): Promise<any> {
    aulaData.id = Number(id);
    console.log('Update #' + aulaData.id);
    return this.aulasService.update(aulaData);
  }
  @Delete('/update:id')
  async delete(@Param('id') id): Promise<any> {
    return this.aulasService.delete(id);
  }
}
