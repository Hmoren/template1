import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { AboutComponent } from './about/about.component';

const app_routes: Routes = [
  { path: '', component: PrincipalComponent },  
  { path: 'product-detail', component: ProductDetailComponent },  
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( app_routes, { useHash: true } )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
