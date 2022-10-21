import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = "";

  borrarHeroe() {    
    //si this.heroes.shift devuelve undefined el || hace que retorne un string vacío
    this.heroeBorrado = this.heroes.shift() || '';    
  }
}
