import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Superman', 'Thor'];
  heroeBorrado: string = '';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop()!;
    console.log(this.heroeBorrado);
  }
}
