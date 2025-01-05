import { Controller, Get, Render, Post, Redirect, Body, Param } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto.';

@Controller('store')
export class StoreController {
    constructor(private readonly storeService: StoreService){}

    @Get()
    @Render('store-admin-home')
    async findAll(): Promise <{}> {
        let testData: {} = await this.storeService.findAll();
        return {data: testData}
    }

    @Get('create-store')
    @Render('create-store')
    getCreateStore(): void{

    }

    @Post('create-store')
    @Redirect('/store')
    postCreateStore(@Body() createStoreDto: CreateStoreDto){
        return this.storeService.postCreateStore(createStoreDto)
}

    @Get('update-store/:id')
    @Render('update-store')
    async getUpdateStore(@Param('id') id: string):Promise <{}>{
        let returnData: {} = await this.storeService.getOneStore(id)
        return {data: returnData}
    }

    @Post('update-store/:id')
    @Redirect('/store')
    async postUpdateStore(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto): Promise <void>{
        await this.storeService.postUpdateStore(id, updateStoreDto)
    }

    @Get('delete-store/:id')
    @Render('delete-store')
    async getDeleteStore(@Param('id') id: string): Promise <{}>{
        let returnData: {} = await this.storeService.getOneStore(id)
        return {data: returnData}
    }

    @Post('delete-store/:id')
    @Redirect('/store')
    async postDeleteStore(@Param('id') id: string): Promise <void>{
        await this.storeService.postDeleteStore(id)
    }

    

}