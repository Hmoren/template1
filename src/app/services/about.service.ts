import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoAbout } from '../interfaces/about.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  info: InfoAbout = {};

  constructor(private http: HttpClient) {
    this.cargarAbout();
   }

  private cargarAbout() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-about.json')
      .subscribe((resp: InfoAbout) => {        
        this.info = resp;
      });
  }
}
