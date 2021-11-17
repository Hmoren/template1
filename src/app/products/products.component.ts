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
    { id: '1', name: 'El Pimometro digital MicroRPM', img: 'assets/img/productos/vyaire/1.jpg' }, 
    { id: '2', name: 'Sotware PUMA ', img: 'assets/img/productos/vyaire/2.jpg' }, 
    { id: '3', name: 'Medidor de CO Exalado Grado medico', img: 'assets/img/productos/vyaire/3.jpg' }, 
    { id: '4', name: 'Turbina bidireccional  GOLD ESTÁNDAR ', img: 'assets/img/productos/vyaire/4.jpg' }, 
    { id: '5', name: 'Filtro MicroGard para Espirometro Microlab y Jaeger', img: 'assets/img/productos/vyaire/5.jpg' }, 
    { id: '6', name: 'Set para PIMOMETRO DIGITAL Micro RPM', img: 'assets/img/productos/vyaire/6.jpg' }, 
    { id: '7', name: 'Cargador de corriente para espirometro Microlab ML3500', img: 'assets/img/productos/vyaire/7.jpg' }, 
    { id: '8', name: 'Transductor de Espirometro Microlab ML3500', img: 'assets/img/productos/vyaire/8.jpg' }, 
    { id: '9', name: 'Valvual expiratoria para Micro RPM (Pimometro Digital)', img: 'assets/img/productos/vyaire/9.jpg' }, 
    { id: '10', name: 'Set para PIMOMETRO DIGITAL Micro RPM', img: 'assets/img/productos/vyaire/10.jpg' }, 
    { id: '11', name: 'Jeringa de 3 litros para realizar maniobra de verificación de calibración', img: 'assets/img/productos/vyaire/11.jpg' }, 
    { id: '12', name: 'Papel para impresora térmica espirometro kit de 1 X 10 rollos', img: 'assets/img/productos/vyaire/12.jpg' }, 
    { id: '13', name: 'Boquilla de Carton desechable para  espirometrias de Adultos y Pediatria', img: 'assets/img/productos/vyaire/13.jpg' }, 
    { id: '14', name: 'Boquillas para medidor de CO 21,8 X 20 X 62', img: 'assets/img/productos/vyaire/14.jpg' }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
