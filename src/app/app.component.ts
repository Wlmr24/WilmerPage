import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    // // URL del archivo PDF que deseas descargar
    // private cvUrl = 'assets/archivos/CV-Wilmer.pdf'; // Cambia esta URL a la ruta de tu archivo PDF

    // // Función para manejar la descarga del archivo PDF
    // downloadCV() {
    //   const link = document.createElement('a');
    //   link.href = this.cvUrl;
    //   link.download = 'CV-Wilmer'; // Nombre del archivo que se descargará
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // }

}
