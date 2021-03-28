import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
