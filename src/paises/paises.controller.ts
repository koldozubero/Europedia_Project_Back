import { Controller, Get, Param, Res } from '@nestjs/common';
import { PaisesService } from './paises.service';

@Controller('paises')
export class PaisesController {

    constructor(private readonly paisesService: PaisesService){}

    @Get()
    findAll(): Promise<any>{
        return this.paisesService.findAll()
    }

    @Get(":nombre")
    async findOne(@Param("nombre")nombre: string) : Promise<any> {
        return await this.paisesService.findOne(nombre);
    }
    
}
