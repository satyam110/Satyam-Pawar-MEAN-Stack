import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name:'search'
})
export class Search implements PipeTransform{
    transform(advertisementList:any,searchTxt:string){

        if(!advertisementList || !searchTxt){
            return advertisementList;
        }
        
        let  advertisementList1 =  advertisementList.filter(ad => ( ad.name.includes(searchTxt) || ad.title.includes(searchTxt) ));
        console.log(JSON.stringify(advertisementList1));

        return advertisementList1;
        
    }
}