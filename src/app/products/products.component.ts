import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ambuDataList= [
    { id: '1', name: 'Reanimador Mark IV Adulto y Baby', img: 'assets/img/productos/ambu/1.jpg' }, 
    { id: '2', name: 'Resucitador Silicona Oval', img: 'assets/img/productos/ambu/2.jpg' }, 
    { id: '3', name: 'Resucitador SPUR II', img: 'assets/img/productos/ambu/3.jpg' }, 
    { id: '4', name: 'Resucitador SPUR II', img: 'assets/img/productos/ambu/4.jpg' }, 
    { id: '5', name: 'Resucitador SPUR II', img: 'assets/img/productos/ambu/5.jpg' },
    { id: '6', name: 'Válvula PEEP Desechable', img: 'assets/img/productos/ambu/6.jpg' },
    { id: '7', name: 'Válvula PEEP Reutilizable', img: 'assets/img/productos/ambu/7.jpg' },
    { id: '8', name: 'Manometro de Presion desechable', img: 'assets/img/productos/ambu/8.jpg' },
    { id: '9', name: 'Manique Ambu MAN BASICO', img: 'assets/img/productos/ambu/9.jpg' },
    { id: '10', name: 'Manique Ambu BABY', img: 'assets/img/productos/ambu/10.jpg' },
    { id: '11', name: 'Collar Cervical', img: 'assets/img/productos/ambu/11.jpg' },
  ]
  vyaireDataList= [
    { id: '1', name: 'Reanimador Mark IV Adulto y Baby', img: 'assets/img/productos/ambu/1.jpg' } 
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
