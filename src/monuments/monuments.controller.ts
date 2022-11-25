import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { Monument } from './monument.interface';
import { MonumentsService } from './monuments.service';

@Controller('monumento')
export class MonumentsController {
    constructor(private monumentsService: MonumentsService) {}

    @Post()
    addMonument(@Body()mon: Monument){
        this.monumentsService.insertMonument(mon);
        return mon;
    }

    @Get()
    getAllMonuments(){
        return this.monumentsService.getMonuments();
    }

    @Get(':id')
    getMonument(@Param('id') id: string){
        return this.monumentsService.getMonument(id);
    }

    @Put(':id')
    changeMonument(@Param('id')id: string, @Body()mon:Monument){
        this.monumentsService.changeMonument(id, mon);
        return mon;
    }

    @Delete(':id')
    deleteMonument(@Param('id')id: string){
        this.monumentsService.deleteMonument(id);
        return 'Borrado con exito'
    }
}
