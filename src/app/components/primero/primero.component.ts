import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {
  
  public flag : boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.flag = !this.flag;
  }

  onEnter(){
    console.log("hola")
  }
  
  validation(event : any){
    console.log(event)
    console.log(event.target)
    console.log((event.target as HTMLInputElement).value)
    //Puedas solo usar letras y no numeros
    let replace = (event.target as HTMLInputElement).value.replace(/[^A-Za-zá-úÁ-Ú ]|[*÷×]/g,'')
    
    //Puedes usar para validar que sean solo numero
    let replace2 = (event.target as HTMLInputElement).value.replace(/[^0-9]|[*÷×]/g,'')
    
    console.log(replace);
    (event.target as HTMLInputElement).value = replace
  }

}
