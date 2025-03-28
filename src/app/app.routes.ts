import { Routes } from '@angular/router';
import { FingerFrontComponent } from './finger-front/finger-front.component';


export const routes: Routes = [
  { 
    path: 'finger-front',
    component: FingerFrontComponent,
    title: 'Lector de Huellas',  
    pathMatch: 'full'            
  }
];