import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-finger-front',
  imports: [],
  templateUrl: './finger-front.component.html',
  styleUrl: './finger-front.component.css'
})

export class FingerFrontComponent implements OnInit {

  fingerprintBase64: string | null = null; // Variable para almacenar la huella
  errorMensaje: string | null = null; // Variable para almacenar el mensaje de error

  constructor(private http: HttpClient) { }

  ngOnInit() {} // No necesitamos nada en ngOnInit por ahora

  capturarHuella() {
    this.http.get('http://localhost:5000/api/fingerprint/capture').subscribe(
      (response: any) => {
        this.fingerprintBase64 = response;
        this.errorMensaje = null; // Limpiar el mensaje de error si hay éxito
        console.log('Huella capturada:', this.fingerprintBase64);
      },
      (error) => {
        this.fingerprintBase64 = null; // Limpiar la huella si hay un error
        this.errorMensaje = 'Error al capturar la huella: ' + error.message; // Almacenar el mensaje de error
        console.error(this.errorMensaje, error);
      }
    );
  }
}
