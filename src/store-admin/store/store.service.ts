import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StoreInventory, Prisma } from '@prisma/client';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto.';

@Injectable()
export class StoreService {
    constructor(private prisma: PrismaService) {}

    findAll(){
        return this.prisma.storeInventory.findMany()
    }

    postCreateStore(data: CreateStoreDto): Promise <{}>{
        return this.prisma.storeInventory.create({data})
    }

    getOneStore(id: string): Promise <{}>{
        return this.prisma.storeInventory.findUnique({where: {id:id}})
    }

    postUpdateStore(id: string, updateStoreDto: UpdateStoreDto): Promise <{}>{
        return this.prisma.storeInventory.update({where:{id:id}, data:updateStoreDto})
    }

    postDeleteStore(id: string): Promise <{}>{
        return this.prisma.storeInventory.delete({where:{id:id}})
    }

}
