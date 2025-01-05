import { IsString, IsNumber, IsBoolean, IsNotEmpty, IsOptional } from "class-validator"

export class CreateStoreDto {
    
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
    dateAdded: string
  }

