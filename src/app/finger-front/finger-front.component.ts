

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finger-front',
  imports: [FormsModule, CommonModule],
  standalone:true,
  templateUrl: './finger-front.component.html',
  styleUrl: './finger-front.component.css'
})
export class FingerFrontComponent {

  textoDeMuestra: string = "";
  otraVariable: string = "El valor es bidireccional con ngModel, si cambias el valor de la variable, cambia el valor del input y viceversa.";
  fingerprintBase64: string | null=null;
  errorMensaje: string | null=null;



  Demostracion(){

    alert("Si jala el componente, lo que escribas en el input lo guardara en la variable textoDeMuestra y lo mostrara sin necesidad de afectar usar document.getElementById... " + this.textoDeMuestra);

  }


  //   showFingerprintSection = false;
  //   fingerprintBase64: string | null = null;
  //   errorMensaje: string | null = null;
  //   isScanning = false;

  // constructor(private http: HttpClient) { }

  // ngOnInit() {}

  // capturarHuella() {
  //   this.resetState();
  //   this.showFingerprintSection = true;
  //   this.isScanning = true;

  //   this.http.get<string>('http://localhost:15000/api/fingerprint/capture')
  //     .pipe(
  //       catchError(error => this.handleError(error))
  //     )
  //     .subscribe({
  //       next: (response) => {
  //         this.fingerprintBase64 = response;
  //         this.isScanning = false;
  //       },
  //       error: (error) => {
  //         this.errorMensaje = error;
  //         this.isScanning = false;
  //       }
  //     });
  // }

  // private resetState() {
  //   this.fingerprintBase64 = null;
  //   this.errorMensaje = null;
  //   this.isScanning = false;
  // }

  // private handleError(error: any) {
  //   let errorMessage = 'Error desconocido';
    
  //   if (error.error instanceof ErrorEvent) {
  //     // Error del lado del cliente
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else if (error.status) {
  //     // Error del servidor
  //     errorMessage = `Código ${error.status}: ${error.error?.message || error.statusText}`;
  //   }
    
  //   console.error(errorMessage, error);
  //   return throwError(() => errorMessage);
  // }
}

// interface User {
//   id: string;
//   name: string;
//   department: string;
//   accessLevel: string;
//   lastVerification: string;
// }

// const users: User[] = [
//   {
//       id: "FP001",
//       name: "Carlos Rodríguez",
//       department: "Administración",
//       accessLevel: "Nivel 3",
//       lastVerification: "2023-05-15 09:23"
//   },
//   {
//     id: "FP002",
//     name: "María González",
//     department: "Recursos Humanos",
//     accessLevel: "Nivel 2",
//     lastVerification: "2023-05-14 14:45"
// },
// {
//     id: "FP003",
//     name: "Juan Pérez",
//     department: "Seguridad",
//     accessLevel: "Nivel 5",
//     lastVerification: "2023-05-15 08:10"
// }
// ];

// // Elementos del DOM con tipado adecuado
// const fingerprintReader = document.getElementById('fingerprint-reader') as HTMLElement;
// const statusMessage = document.getElementById('status-message') as HTMLElement;
// const userInfo = document.getElementById('user-info') as HTMLElement;
// const scanButton = document.getElementById('scan-button') as HTMLButtonElement;
// const retryButton = document.getElementById('retry-button') as HTMLButtonElement;
// const errorButton = document.getElementById('error-button') as HTMLButtonElement;

// // Elementos de información del usuario
// const userName = document.getElementById('user-name') as HTMLElement;
// const userId = document.getElementById('user-id') as HTMLElement;
// const userDepartment = document.getElementById('user-department') as HTMLElement;
// const userAccess = document.getElementById('user-access') as HTMLElement;
// const userLastVerification = document.getElementById('user-last-verification') as HTMLElement;

// type StatusType = 'idle' | 'scanning' | 'success' | 'error';

// function updateStatus(status: StatusType, message: string): void {
//   fingerprintReader.classList.remove('scanning', 'success', 'error');
  
//   if (status !== 'idle') {
//       fingerprintReader.classList.add(status);
//   }
  
//   statusMessage.querySelector('span')!.textContent = message;
  
//   scanButton.style.display = status === 'idle' ? 'block' : 'none';
//   retryButton.style.display = status === 'success' ? 'block' : 'none';
//   errorButton.style.display = status === 'error' ? 'block' : 'none';
// }

// function displayUserInfo(user: User): void {
//   userName.textContent = user.name;
//   userId.textContent = user.id;
//   userDepartment.textContent = user.department;
//   userAccess.textContent = user.accessLevel;
//   userLastVerification.textContent = user.lastVerification;
  
//   userInfo.classList.add('visible');
  
//   setTimeout(() => {
//       clearUserInfo();
//   }, 7000);
// }

// function clearUserInfo(): void {
//   userInfo.classList.remove('visible');
  
//   setTimeout(() => {
//       const placeholder = '-';
//       userName.textContent = placeholder;
//       userId.textContent = placeholder;
//       userDepartment.textContent = placeholder;
//       userAccess.textContent = placeholder;
//       userLastVerification.textContent = placeholder;
//   }, 300);
// }

// function startScan(): void {
//   updateStatus('scanning', 'Escaneando huella digital...');
  
//   setTimeout(() => {
//       const success = Math.random() > 0.3;
      
//       if (success) {
//           const randomUser = users[Math.floor(Math.random() * users.length)];
//           const now = new Date();
          
//           randomUser.lastVerification = now.toISOString()
//               .replace(/T/, ' ')
//               .replace(/\..+/, '')
//               .slice(0, -3);
          
//           updateStatus('success', 'Huella reconocida correctamente');
//           displayUserInfo(randomUser);
//       } else {
//           updateStatus('error', 'Error al reconocer la huella. Intente nuevamente.');
//       }
//   }, 3000);
// }

// async function capturarHuella(): Promise<string> {
//   const url = "http://localhost:15000/api/fingerprint/capture";
  
//   try {
//       const response = await fetch(url);
      
//       if (!response.ok) {
//           throw new Error(`Error HTTP: ${response.status}`);
//       }
      
//       return await response.json();
//   } catch (error) {
//       console.error("Error en la captura:", error);
//       throw error;
//   }
// }

// function resetReader(): void {
//   updateStatus('idle', 'Coloque su dedo en el lector');
//   clearUserInfo();
// }

// // Event listeners
// scanButton.addEventListener('click', startScan);
// retryButton.addEventListener('click', resetReader);
// errorButton.addEventListener('click', resetReader);
// scanButton.addEventListener('click', () => capturarHuella()); 



