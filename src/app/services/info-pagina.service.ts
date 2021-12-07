import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoHeader } from '../interfaces/info-header.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  header: InfoHeader = {};

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarHeader();
  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.info = resp;
      });
  }

  private cargarHeader() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-header.json')
      .subscribe((resp: InfoPagina) => {
        this.header = resp;
      });
  }

}
