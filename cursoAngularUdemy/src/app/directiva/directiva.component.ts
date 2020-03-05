import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  cargando:boolean;
  nombres:Array<String> = ["Sebas, Francisco, Sebastian, Juan Jose"]; 
  pestana:String;

  constructor() { }

  ngOnInit(): void {
    this.cargando = true;
    setTimeout(() => {
      this.cargando = false;
    }, 4000)
  }

  mostrarCargando():void{
    this.ngOnInit()
  }

  cambiarPestana(pestana: String){
    this.pestana = pestana;
  }
}
