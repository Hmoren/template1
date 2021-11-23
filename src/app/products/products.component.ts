import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoDescripcion } from '../interfaces/producto-detalle.interface'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productDialog: boolean = false;
  productosFiltrado: ProductoDescripcion[] = [];

  ambuDataList = [
    { id: '1', marca:'AMBU', name: 'Reanimador Mark IV Adulto y Baby', img: 'assets/img/productos/ambu/1.jpg' },
    { id: '2', marca:'AMBU', name: 'Resucitador Silicona Oval', img: 'assets/img/productos/ambu/2.jpg' },
    { id: '3', marca:'AMBU', name: 'Resucitador SPUR II', img: 'assets/img/productos/ambu/3.jpg' },
    { id: '4', marca:'AMBU', name: 'Mascarillas Transparente con borde azul inflable', img: 'assets/img/productos/ambu/4.jpg' },
    { id: '5', marca:'AMBU', name: 'Mascarillas de Silicona Transparente Libre de Latex', img: 'assets/img/productos/ambu/5.jpg' },
    { id: '6', marca:'AMBU', name: 'Válvula PEEP Desechable', img: 'assets/img/productos/ambu/6.jpg' },
    { id: '7', marca:'AMBU', name: 'Válvula PEEP Reutilizable', img: 'assets/img/productos/ambu/7.jpg' },
    { id: '8', marca:'AMBU', name: 'Manometro de Presion desechable', img: 'assets/img/productos/ambu/8.jpg' },
    { id: '9', marca:'AMBU', name: 'Manique Ambu MAN BASICO', img: 'assets/img/productos/ambu/9.jpg' },
    { id: '10', marca:'AMBU', name: 'Manique Ambu BABY', img: 'assets/img/productos/ambu/10.jpg' },
    { id: '11', marca:'AMBU', name: 'Collar Cervical', img: 'assets/img/productos/ambu/11.jpg' },
  ]
  vyaireDataList = [
    { id: '1', marca:'VYAIRE',name: 'El Pimometro digital MicroRPM', img: 'assets/img/productos/vyaire/1.jpg' },
    { id: '2', marca:'VYAIRE', name: 'Sotware PUMA', img: 'assets/img/productos/vyaire/2.jpg' },
    { id: '3', marca:'VYAIRE', name: 'Medidor de CO Exalado Grado medico', img: 'assets/img/productos/vyaire/3.jpg' },
    { id: '4', marca:'VYAIRE', name: 'Turbina bidireccional GOLD ESTÁNDAR', img: 'assets/img/productos/vyaire/4.jpg' },
    { id: '5', marca:'VYAIRE', name: 'Filtro MicroGard para Espirometro Microlab y Jaeger', img: 'assets/img/productos/vyaire/5.jpg' },
    { id: '6', marca:'VYAIRE', name: 'Set para PIMOMETRO DIGITAL Micro RPM', img: 'assets/img/productos/vyaire/6.jpg' },
    { id: '7', marca:'VYAIRE', name: 'Cargador de corriente para espirometro Microlab ML3500', img: 'assets/img/productos/vyaire/7.jpg' },
    { id: '8', marca:'VYAIRE', name: 'Transductor de Espirometro Microlab ML3500', img: 'assets/img/productos/vyaire/8.jpg' },
    { id: '9', marca:'VYAIRE', name: 'Valvual expiratoria para Micro RPM (Pimometro Digital)', img: 'assets/img/productos/vyaire/9.jpg' },
    { id: '10', marca:'VYAIRE', name: 'Set para PIMOMETRO DIGITAL Micro RPM', img: 'assets/img/productos/vyaire/10.jpg' },
    { id: '11', marca:'VYAIRE', name: 'Jeringa de 3 litros para realizar maniobra de verificación de calibración', img: 'assets/img/productos/vyaire/11.jpg' },
    { id: '12', marca:'VYAIRE', name: 'Papel para impresora térmica espirometro kit de 1 X 10 rollos', img: 'assets/img/productos/vyaire/12.jpg' },
    { id: '13', marca:'VYAIRE', name: 'Boquilla de Carton desechable para  espirometrias de Adultos y Pediatria', img: 'assets/img/productos/vyaire/13.jpg' },
    { id: '14', marca:'VYAIRE', name: 'Boquillas para medidor de CO 21,8 X 20 X 62', img: 'assets/img/productos/vyaire/14.jpg' }

  ]

  productoDetalle = [
    { 
      id: '1', 
      marca:'AMBU',
      titulo: 'Reanimador Mark IV Adulto y Baby', 
      description: 'Ambu original, lider mundial en resucitadores. Contamos con dos modelos Adulto y Pediatrico. los resucitadores Ambu Mark IV Adulto  y Mark IV Baby ( Pediatrico y Neonatal)  fáciles de sostener gracias al Asa de sujecion incorporada y bolsa doble, completamente autoclavables para su reutilización.', 
      img: 'assets/img/productos/ambu/1.jpg' },
    { 
      id: '2', 
      marca:'AMBU',
      titulo: 'Resucitador Silicona Oval', 
      description: 'Ambu original, lider mundial en resucitadores. Resucitador Silicona Oval se ha diseñado para la ventilación manual desde pacientes neonatos hasta adultos. Es un resucitador de silicona reutilizable.', 
      img: 'assets/img/productos/ambu/2.jpg' },
    { 
      id: '3', 
      marca:'AMBU',
      titulo: 'Resucitador SPUR II', 
      description: 'Ambu SPUR II desechable ofrece a los usuarios una excepcional sensación táctil y visual durante la reanimación. La bolsa es muy sensible y muestra una resistencia mecánica mínima. Su diseño  proporciona un volumen de expulsión óptimo con un retroceso perfecto. Disponible para pacientes neonatos, pediatricos y adulto.', 
      img: 'assets/img/productos/ambu/3.jpg' },
    { 
      id: '4', 
      marca:'AMBU',
      titulo: 'Mascarillas Transparente con borde azul inflable', 
      description: 'Mascarilla tamaño transparente de silicona azul, con borde blando, autoclavable para Resucitador manual modelo Mark IV adulto y Baby Mark IV. 6 tamaños', 
      img: 'assets/img/productos/ambu/4.jpg' },
    { 
      id: '5', 
      marca:'AMBU',
      titulo: 'Mascarillas de Silicona Transparente Libre de Latex', 
      description: 'Mascarilla Adulto/Pediatrica/Neo de silicona trans-parente libre de latex, manguito abierto, reusable para reanimadores manuales. 6 tamaños', 
      img: 'assets/img/productos/ambu/5.jpg' },
    { 
      id: '6', 
      marca:'AMBU',
      titulo: 'Válvula PEEP Desechable', 
      description: 'Las Válvulas PEEP desechables han sido diseñadas para utilizarse con resucitadores manuales, ventiladores, máquinas de anestesia (donde indica el fabricante) y sistemas CPAP', 
      img: 'assets/img/productos/ambu/6.jpg' },
    { 
      id: '7', 
      marca:'AMBU',
      titulo: 'Válvula PEEP Reutilizable', 
      description: 'Las válvulas PEEP Ambu han sido diseñadas para utilizarse con resucitadores manuales, ventiladores, máquinas de anestesia (donde indica el fabricante) y sistemas CPAP.', 
      img: 'assets/img/productos/ambu/7.jpg' },
    { 
      id: '8', 
      marca:'AMBU',
      titulo: 'Manometro de Presion desechable', 
      description: 'Manómetro de presión desechable diseñado para monitorizar la presión de la vía respiratoria del paciente. Diseño pequeño, preciso y fiable que elimina cualquier riesgo de contaminación cruzada, no contiene látex ni PVC. Compatible con todos los reanimadores Ambu. Dimensiones: 55mm de largo por 22mmØ.', 
      img: 'assets/img/productos/ambu/8.jpg' },
    { 
      id: '9', 
      marca:'AMBU',
      titulo: 'Manique Ambu MAN BASICO', 
      description: 'Maniquí Ambu MAN tiene un diseño de torso cerrado para formación académica,  proporciona una percepción muy real de la ventilación. El indicador de compresión confirma la profundidad correcta de la compresión. Incorpora un sistema higiénico exclusivo y patentado con una pieza facial y 25 bolsas para la cabeza. La forma detallada del torso, con sus referencias anatómicas, permite a los estudiantes aprender el algoritmo completo de la reanimación cardiopulmonar básica. Ambu SAM es un muñeco ligero,  compacto y fácil de transportar. Medidas:70 x 33 x 20 cm. Peso: 2 Kgs.', 
      img: 'assets/img/productos/ambu/9.jpg' },
    { 
      id: '10', 
      marca:'AMBU',
      titulo: 'Manique Ambu BABY', 
      description: 'Ambu Baby  para  RCP  simulador bebé, tamaño real de un niño de 1 año de edad. Práctica de técnica de BLS (Apoyo vital básico) este maniquí entrega verificación de correcta simulación en RCP. Ambu patentó sistema de protección, higiénico, con  su  sistema  de piezas faciales de bebé, intercambiables. Puede  verificarse  en  forma  visual,  audible y palpable la ventilación y natural exalación. El  instructor  puede simular obstrucción en la vía aérea. Simulación real de pulso braquial, prevee correcto entrenamiento. Peso : 2,5Kgs. con caja. Largo : 40 cms.', 
      img: 'assets/img/productos/ambu/10.jpg' },
    { 
      id: '11', 
      marca:'AMBU',
      titulo: 'Collar Cervical', 
      description: 'Collar cervical rígido Mini Perfit Ace, de una sola pieza, ajustable en 12 graduaciones o posiciones precisas. 2 Modelos (Neonatal/Pediátrico, niño) (y mayor o adultos muy pequeños). Desechable. Material: Polietileno. Color: Amarillo/Gris claro.', 
      img: 'assets/img/productos/ambu/11.jpg' },
      { id: '1', marca:'VYAIRE',titulo: 'El Pimometro digital MicroRPM', description: 'El Pimometro digital MicroRPM (Medidor de Presión Respiratoria) se utiliza en la toma de presión máxima inspiratoria y presión maxima espiratoria de boca (MIP/MEP) incluye presión nasal inspiratoria (SNIP) en un solo instrumento. Estas pruebas no son invasivas, mas bien son tecnicas simples que evaluan la fuerza muscular respiratoria esenciales en el seguimiento de pacientes con EPOC que se someten a un programa de rehabilitación pulmonar y también son útiles en la detección de otras enfermedades que afectan a la función de los músculos respiratorios o secuelas Covid. Fácil de usar, opera a batería de 9V, el MicroRPM cuenta con una pantalla digital clara donde muestra los resultados en cmH2O y viene completo con todos los accesorios en su maletín de proteccion. También se ofrece como opción el software PUMA para PC.software de base de datos y análisis.', img: 'assets/img/productos/vyaire/1.jpg' },
      { id: '2', marca:'VYAIRE',titulo: 'Sotware PUMA', description: 'Complemento Opcional para un mejor uso de Pimometro Digital Micro RPM', img: 'assets/img/productos/vyaire/2.jpg' },
      { id: '3', marca:'VYAIRE',titulo: 'Medidor de CO Exalado Grado medico', description: 'Medidor de CO Exalado Grado medico. Intrumento para Screening que ayuda a determinar el rango de CO del Gas alveolar exalado. Tiene Cuatro rangos de niveles CO son presentados en el display personalizable del LCD. Una herramienta util en programas antitabaco.', img: 'assets/img/productos/vyaire/3.jpg' },
      { id: '4', marca:'VYAIRE',titulo: 'Turbina bidireccional GOLD ESTÁNDAR', description: 'Turbina bidireccional  GOLD ESTÁNDAR compatible con espirometro modelos ML3500 y MK6, color gris y negro', img: 'assets/img/productos/vyaire/4.jpg' },
      { id: '5', marca:'VYAIRE',titulo: 'Filtro MicroGard para Espirometro Microlab y Jaeger', description: 'Filtro MicroGard para Espirometro Microlab y Jaeger,  tiene una boquilla integrada adecuada para uso adulto y pediátrico. La caja trae 50 filtros individuales. Eficiencia viral y bacteriana del 99,999% contra la contaminación cruzada (Informe de prueba de Nelson 10003754). Baja resistencia al flujo de aire. Espacio muerto mínimo (55 ml). La carcasa del filtro y el vellón del filtro han sido sometidos a pruebas de biocompatibilidad.', img: 'assets/img/productos/vyaire/5.jpg' },
      { id: '6', marca:'VYAIRE',titulo: 'Set para PIMOMETRO DIGITAL Micro RPM', description: 'Set para PIMOMETRO DIGITAL Micro RPM, de 80 filtros bacterianos de presión bucal en bolsa individual que incluye: Filtro Antibacterial Pinza nazal Boquilla de silicona tipo Buceo.', img: 'assets/img/productos/vyaire/6.jpg' },
      { id: '7', marca:'VYAIRE',titulo: 'Cargador de corriente para espirometro Microlab ML3500', description: 'Cargador de corriente para espirometro Microlab ML3500', img: 'assets/img/productos/vyaire/7.jpg' },
      { id: '8', marca:'VYAIRE',titulo: 'Transductor de Espirometro Microlab ML3500', description: 'Transductor de Espirometro Microlab ML3500', img: 'assets/img/productos/vyaire/8.jpg' },
      { id: '9', marca:'VYAIRE',titulo: 'Valvual expiratoria para Micro RPM (Pimometro Digital)', description: 'Valvual expiratoria para Micro RPM (Pimometro Digital)', img: 'assets/img/productos/vyaire/9.jpg' },
      { id: '10', marca:'VYAIRE',titulo: 'Set para PIMOMETRO DIGITAL Micro RPM', description: 'Set para PIMOMETRO DIGITAL Micro RPM, de 4 adaptadores nasales para maniobra Snif: 4 medidas.', img: 'assets/img/productos/vyaire/10.jpg' },
      { id: '11', marca:'VYAIRE',titulo: 'Jeringa de 3 litros para realizar maniobra de verificación de calibración', description: 'Jeringa de 3 litros para realizar maniobra de verificación de calibración. Incluye adaptador, Microlab MK8, Jaeger', img: 'assets/img/productos/vyaire/11.jpg' },
      { id: '12', marca:'VYAIRE',titulo: 'Papel para impresora térmica espirometro kit de 1 X 10 rollos', description: 'Papel para impresora térmica espirometro kit de 1 X 10 rollos, compatible con Espirometros Microlab .', img: 'assets/img/productos/vyaire/12.jpg' },
      { id: '13', marca:'VYAIRE',titulo: 'Boquilla de Carton desechable para  espirometrias de Adultos y Pediatria', description: 'Boquilla de Carton desechable para  espirometrias de Adultos y Pediatria. Unidad de venta en bolsas de 100 unidades. Boquilla Adulto medidas 30 X 28 X 67 de largo. Boquilla Pediatrica medidas  21,8 X 20 X 62 de Largo', img: 'assets/img/productos/vyaire/13.jpg' },
      { id: '14', marca:'VYAIRE',titulo: 'Boquillas para medidor de CO 21,8 X 20 X 62', description: 'Boquillas para medidor de CO 21,8 X 20 X 62. Unidad de Venta bolsa de 100 unidades', img: 'assets/img/productos/vyaire/14.jpg' },
  ]



  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  editProduct(contenido: any, producto: any) {
    console.log(producto);
    this.filtrarProductos(producto.id, producto.marca, producto.name)
    this.modal.open(contenido, { size: 'xl', centered: true });
  }

  private filtrarProductos(id: string,marca: string, name: string) {   
    console.log('id '+id+' marca '+marca+' name '+name); 
    
    this.productosFiltrado = [];
    
    this.productoDetalle.forEach(prod => {
      if (prod.id.indexOf(id) >= 0 && prod.marca.indexOf(marca) >= 0 && prod.titulo.indexOf(name) >= 0) {
        this.productosFiltrado.push(prod);
        console.log(this.productosFiltrado)
      }
    });

  }





}
