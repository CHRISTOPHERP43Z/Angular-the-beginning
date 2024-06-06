import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Sucursal {
  name: string;
  ciudad: string;
}

interface Servicio {
  name: string;
  id: number;
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  servicios: Servicio[] = [];

  sucursales: Sucursal[] = [];
  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3), ] ],
      price: [0, [ Validators.required, Validators.min(0) ] ],
      inStorage: [0, [ Validators.required, Validators.min(0) ] ],
      selectedSucursal: [null, [ Validators.required ] ],
      selectedServicio: [null, [ Validators.required ] ],
    });
  }

  ngOnInit(): void {
    this.sucursales = [
      { name: 'sucursal1', ciudad: 'bucaramanga' },
      { name: 'sucursal2', ciudad: 'bogota' },
      { name: 'sucursal3', ciudad: 'medellin' },
      { name: 'sucursal4', ciudad: 'cali' }
    ];

    this.loadServicios();
  }

  loadServicios(): void {
    this.servicios = [
      { name: 'Delivery', id: 1 },
      { name: 'Reservas', id: 2 },
      { name: 'Menu Digital', id: 3 },
    ];
  }

  onSave(): void {

    if ( this.myForm.invalid ) return;

    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0,
      inStorage: 0,
      selectedSucursal: null,
      selectedServicio: null,
    })
  }
}