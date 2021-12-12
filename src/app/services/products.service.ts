import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface'
import { ProductoDescripcion } from '../interfaces/producto-detalle.interface'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productos: Product[] = [];
  productoDetalle: ProductoDescripcion[] = [];
  productoDetalleFiltrado: ProductoDescripcion[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
    this.cargarProductoDetalle();
    //this.cargarProductoDetalle2();
  }

  private cargarProductos() {
    // Leer el archivo JSON
    this.http.get('assets/data/productos_idx.json')
      .subscribe((resp: any) => {
        this.productos = resp;
      });
  }

  private cargarProductoDetalle() {

    return new Promise<void>((resolve, reject) => {
      this.http.get('assets/data/productos-detalle.json')
        .subscribe((resp: any) => {

          this.productoDetalle = resp;
          resolve();
        });
    });
  }

  private filtrarProductoDetalle(id: string, sku: string) {
    this.productoDetalleFiltrado = [];
    this.productoDetalle.forEach(prod => {
      if (prod.id.indexOf(id) >= 0 && prod.sku.indexOf(sku) >= 0) {
        this.productoDetalleFiltrado.push(prod);
      }
    });
  }

  getProducto(id: string, sku: string) {
    if (this.productoDetalle.length === 0) {
      // cargar productos
      this.cargarProductoDetalle().then(() => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductoDetalle(id, sku);
        return this.productoDetalleFiltrado;
      });
    } else {
      // aplicar el filtro
      this.filtrarProductoDetalle(id, sku);
      return this.productoDetalleFiltrado;
    }
    return this.productoDetalleFiltrado;
  }

}
