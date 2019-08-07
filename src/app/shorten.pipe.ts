import{PipeTransform,Pipe} from '@angular/core';

@Pipe({
  name:'shorten'
})
export class ShortenPipe implements PipeTransform{

  // transform(value:any,limit:number){
  //   return value.substr(0,limit);
  // }

  transform(value:any,args?:any){
    if(args==0){
      return value;
    }
    else if(args==1){
      return(value).substr(1,3);
    }
    else{
      return(value).substr(1,4);
      
    }
  }

}