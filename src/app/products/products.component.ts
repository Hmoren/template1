import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoDescripcion } from '../interfaces/producto-detalle.interface'
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productDialog: boolean = false;
  productosFiltrado: ProductoDescripcion[] = [];
  productoDetalle: ProductoDescripcion[];


  constructor(private modal: NgbModal,
    public productoService: ProductsService) {
    this.productoDetalle = productoService.productoDetalle;
  }

  editProduct(contenido: any, producto: any) {
    var detalle = this.productoService.getProducto(producto.id, producto.sku);
    this.productosFiltrado = detalle;
    this.modal.open(contenido, { size: 'xl', centered: true });
  }
}
