import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paises, paisDocument } from './paises.schema';

@Injectable()
export class PaisesService {

    constructor(
        @InjectModel(Paises.name) private paisModel: Model<paisDocument>
    ){}

    async findAll(): Promise<any>{
        return await this.paisModel.find();
    }

    async findOne(nombre): Promise<any> {
        return await this.paisModel.findOne({ nombre });
    }
}
