import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private _tarjetaService: TarjetaService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      nroTarj: ['' ,[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExp: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['',[Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas(){
    this._tarjetaService.getListTarjetas().subscribe(data => {
      console.log(data);
      this.listTarjetas = data;
    }, error => {
      console.log(error);
    })
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

  eliminarTarjeta(id: number){
    this._tarjetaService.deleteTarjetas(id).subscribe(data => {
      this.toastr.error(' Tu tarjeta se eliminó exitosamente', 'Tarjeta eliminada');
      this.obtenerTarjetas();
    }, error => {
      console.log(error);
    })

  }
}
