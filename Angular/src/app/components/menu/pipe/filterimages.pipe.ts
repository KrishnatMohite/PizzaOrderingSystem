import { Pipe, PipeTransform } from '@angular/core';    
import { PizzaSize } from 'src/app/shared/app.constant';
    
@Pipe({    
  name: 'filterimages'    
})    
export class FilterimagesPipe implements PipeTransform {    
  transform(items: any[], size): any { 
      let list = items;
      if (items !== undefined) {
        list = items.filter(item => item.Size == size);   
      }   
      return list;
  }    
    
} 