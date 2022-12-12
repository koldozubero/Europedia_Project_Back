import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type paisDocument = Paises & Document;

@Schema()
export class Paises {
    @Prop({unique: true, required: true})
    id: number;

    @Prop({required: true})
    nombre: string;

    @Prop()
    capital: string;

    @Prop()
    poblacion: number;

    @Prop()
    idiomas_oficiales: Array<string>;

    @Prop()
    datos_curiosos: Array<string>;
}

export const PaisSchema = SchemaFactory.createForClass(Paises);
