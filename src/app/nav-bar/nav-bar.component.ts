import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() buscarCiudadMapa: (ciudad:string) => void = () => {};
  constructor() { }
  
  
   onSubmit(form: NgForm) {
    this.buscarCiudadMapa(form.value.location);
    console.log('Formulario enviado:', form.value);
  }
}
