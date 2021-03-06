import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public form = new FormGroup({});
  mensajeEnviado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public _servicio: ContactService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,Validators.minLength(9)]],
      message: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  enviar() {

    var cuerpo = 'Nombre: '+ this.form.get('name')?.value + '  Email: '+ this.form.get('email')?.value + '  Telefono: '+ this.form.get('phone')?.value + '  Mensaje: '+ this.form.get('message')?.value;
    const body1 = new HttpParams()
      .set('name', this.form.get('name')?.value)
      .set('email', this.form.get('email')?.value)
      .set('phone', this.form.get('phone')?.value)
      .set('message', cuerpo);
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    this.http.post(environment.urlCorreo, body1, { headers }).subscribe((resultado: any) => {
      this.mensajeEnviado = true;
      this.form.reset();
    });
  }

  campoEsValido(campo: string) {
    return this.form.controls[campo].errors && this.form.controls[campo].touched
  }

}
