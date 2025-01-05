import { Controller, Get, Render, Post, Redirect, Body } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
    constructor(private readonly storeService: StoreService){}

    @Get()
    @Render('store-admin-home')
    findAll(): {} {
        this.storeService.findAll();
        let testData = [{
            id: 1,
            itemName: 'name1', 
            itemQuantity: 111,
            inWarehoue: true, 
            dateAdded: 'today',
            dateUpdated: 'today'
        }, 
        {
            id: 1,
            itemName: 'name2', 
            itemQuantity: 222,
            inWarehoue: false, 
            dateAdded: 'today',
            dateUpdated: 'today'
        }         
    ]
        return {data: testData}

    }

    @Get('update-store')
    @Render('update-store')
    getUpdateStore(): void{

    }

    @Post('update-store')
    @Redirect('')
    postUpdateStore(@Body() body): void{
        console.log(body)
    }


    

}
