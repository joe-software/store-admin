import { IsString, IsNumber, IsBoolean, IsNotEmpty, IsOptional } from "class-validator"

export class UpdateStoreDto {
    
    @IsString()
    @IsNotEmpty()
    itemName: string

    @IsNumber()
    @IsNotEmpty()
    itemQuantity: number

    @IsString()
    @IsNotEmpty()
    itemSupplier: string

    @IsBoolean()
    @IsNotEmpty()
    inWarehouse: boolean

    @IsString()
    @IsOptional()
    dateModified: string
  }

