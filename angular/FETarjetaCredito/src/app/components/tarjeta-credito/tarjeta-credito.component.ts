import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      nroTarj: ['' ,[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExp: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['',[Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
  }
  agregarTarjeta(){
    console.log(this.form)
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      nroTarj: this.form.get('nroTarj')?.value,
      fechaExp: this.form.get('fechaExp')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    this.listTarjetas.push(tarjeta);
    this.toastr.success(tarjeta.titular + ' tu tarjeta se registró exitosamente', 'Tarjeta registrada');
    this.form.reset();
  }
}
