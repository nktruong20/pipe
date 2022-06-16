import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list:any[],keyword?:any): any[] {
    if(keyword){
      keyword =keyword.toLowerCase();
      if(keyword=="") return list;
      return list.filter((data)=>{
        return data.name.toLowerCase().includes(keyword)
      });
    }else{
      return list
    }
  }

}
