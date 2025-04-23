import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-finger-front',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './finger-front.component.html',
  styleUrls: ['./finger-front.component.css']
})
export class FingerFrontComponent {
  textoDeMuestra: string = "";
  fingerprintBase64: string | null = null;
  errorMensaje: string | null = null;
  isScanning: boolean = false;

  constructor(private http: HttpClient) { }

  capturarHuella() {
    this.resetState();
    this.isScanning = true;
    this.http.get<string>('http://localhost:15000/api/fingerprint/capture')
      .pipe(
        catchError((error) => this.handleError(error))
      )
      .subscribe({
        next: (response) => {
          this.fingerprintBase64 = response;
          this.isScanning = false;
        },
        error: (error) => {
          this.errorMensaje = error;
          this.isScanning = false;
        }
      });
  }

  resetState() {
    this.fingerprintBase64 = null;
    this.errorMensaje = null;
    this.isScanning = false;
  }

  private handleError(error: any) {
    let errorMessage = 'Error desconocido';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error del cliente: ${error.error.message}`;
    } else if (error.status) {
      errorMessage = `Error ${error.status}: ${error.error?.message || error.statusText}`;
    }
    
    console.error(errorMessage, error);
    return throwError(() => errorMessage);
  }
}