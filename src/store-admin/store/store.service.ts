import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService {
    constructor() {}

    findAll(){
        return 'Successful request'
    }
    
}
