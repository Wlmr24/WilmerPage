import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

      // URL del archivo PDF que deseas descargar
      private cvUrl = 'assets/archivos/CV-Wilmer-2024.pdf'; // Cambia esta URL a la ruta de tu archivo PDF

      // Función para manejar la descarga del archivo PDF
      downloadCV() {
        const link = document.createElement('a');
        link.href = this.cvUrl;
        link.download = 'CV-Wilmer-2024.pdf'; // Nombre del archivo que se descargará
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

}
