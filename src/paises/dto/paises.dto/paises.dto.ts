import { IsInt, IsString } from "class-validator"

export class PaisesDto {

        @IsInt({message: "El campo id tiene que ser en formato number"})
        id: number
    
        @IsString({message: "El campo nombre tiene que ser de formato number"})
        nombre: string

        @IsString({message: "El campo capital tiene que ser de formato number"})
        capital: string
    
        @IsInt({message: "El campo poblacion tiene que ser en formato number"})
        poblacion: number

        @IsString({message: "El campo idiomas_oficiales tiene que ser de formato Array<number>"})
        idiomas_oficiales: Array<string>

        @IsString({message: "El campo datos_curiosos tiene que ser de formato Array<number>"})
        datos_curiosos: Array<string>
    
}
