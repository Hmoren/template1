import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact.interface'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactos: Contact[] = [];

  constructor(private http: HttpClient) {
    this.cargarContactos()
   }

  
  private cargarContactos() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-contact.json')
      .subscribe((resp: any) => {
        this.contactos = resp;
      });
  }
}
