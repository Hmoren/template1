import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,]],
      message: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  enviar() {
    const body1 = new HttpParams()
      .set('name', this.form.get('name')?.value)
      .set('email', this.form.get('email')?.value)
      .set('phone', this.form.get('phone')?.value)
      .set('message', this.form.get('message')?.value);
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    this.http.post("https://hmoren.github.io/template1/assets/contact.php", body1, { headers }).subscribe((resultado: any) => {
      console.log(resultado);
      const returnjson: any[] = Array.of(resultado);
      console.log(returnjson);
      this.mensajeEnviado = true;
    });
  }

  campoEsValido(campo: string) {
    return this.form.controls[campo].errors && this.form.controls[campo].touched
  }

}
