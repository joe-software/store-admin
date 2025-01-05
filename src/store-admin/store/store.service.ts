import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StoreInventory, Prisma } from '@prisma/client';

@Injectable()
export class StoreService {
    constructor(private prisma: PrismaService) {}

    findAll(){
        return 'Successful request'
    }

    postCreateStore(data){
        data.itemQuantity = Number(data.itemQuantity)
        console.log(data)
        return this.prisma.storeInventory.create({data})
    }
}
