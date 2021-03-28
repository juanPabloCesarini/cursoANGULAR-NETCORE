import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    { titular: "Juan Perez", nroTarj: "5435587756", fechaExp: "11/21", cvv: "123"},
    { titular: "Maia Juarez", nroTarj: "376625555225489", fechaExp: "04/23", cvv: "548"},
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: [''],
      nroTarj: [''],
      fechaExp: [''],
      cvv: ['']
    })
  }

  ngOnInit(): void {
  }

}
