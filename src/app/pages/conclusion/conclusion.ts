import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-conclusion',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    NgFor,
    MatButtonModule
  ],
  templateUrl: './conclusion.html',
  styleUrl: './conclusion.css'
})
export class Conclusion {
  
  // Inyectar HttpClient usando inject() - MÁS SEGURO
  private http = inject(HttpClient);
  
  // Mensaje inspiracional final
  finalQuote: string = "El amor no es la ausencia de conflictos, sino la capacidad de enfrentarlos juntos y repararlos.";
  
  // Recursos externos
  externalResources: any[] = [
    { name: 'Buscar Terapia Familiar', url: 'https://www.psicoterapeutasenmexico.com/', icon: 'psychology', description: 'Encuentra un profesional para profundizar en patrones sistémicos.' },
    { name: 'Guía de Crianza Consciente', url: 'https://www.disciplinapositiva.com/', icon: 'menu_book', description: 'Profundiza en la educación sin castigo ni premios.' },
    { name: 'Herramientas de Mindfulness', url: 'https://www.headspace.com/', icon: 'self_improvement', description: 'Aprende a pausar la reacción emocional en el momento.' }
  ];

  dailyAnchor: string = 'Haz clic para recibir tu anclaje final.';

  anchoringQuotes: string[] = [
    "La validación es el puente para ir del cerebro emocional al cerebro lógico. Úsala.",
    "El amor no es la ausencia de conflictos, sino la capacidad de enfrentarlos juntos y repararlos.",
    "No te juzgues por el error. Úsalo como una señal para activar tu Kit de Reseteo.",
    "La clave no es la perfección, es la Reparación. Tu vínculo es más fuerte cuando lo reparas.",
    "Recuerda que lo que no se habla, se hereda. Hoy has elegido romper ese silencio."
  ];

  downloadables = [
    { 
      name: 'Diario Terapéutico de Conexión Personal',
      description: 'Un set de 49 páginas para el seguimiento de patrones de pensamiento y emoción. Incluye secciones para el Registro Diario , rastreadores de Hábitos que me Hacen Bien , herramientas de reestructuración cognitiva (como la Papelera de Pensamientos Negativos ), y un Plan de Crisis Personal.',
      file: 'diario.pdf',
      icon: 'edit_note'
    },
    { 
      name: 'Farmacia Emocional',
      description: 'Un set de plantillas para imprimir y armar tus propios remedios simbólicos en casa. Incluye etiquetas para ABRAZOTENOL (indicado para extrañar menos ), RISOTRIL® (para que nunca falten las risas ), y CORAZOLINA (200mg de amor incondicional )',
      file: 'guia-antidotos-rapida.pdf', 
      icon: 'menu_book'
    }
  ];

  // Elimina el constructor si usas inject()

  // Método para generar una frase aleatoria
  generateDailyAnchor() {
    const randomIndex = Math.floor(Math.random() * this.anchoringQuotes.length);
    this.dailyAnchor = this.anchoringQuotes[randomIndex];
  }

  async downloadPDF(fileName: string, displayName: string) {
    try {
      const fileUrl = `assets/${fileName}`;
      console.log('📥 Iniciando descarga de:', fileUrl);
      
      // Usar HttpClient inyectado
      const fileData = await this.http.get(fileUrl, { 
        responseType: 'blob' 
      }).toPromise();

      if (fileData) {
        this.triggerDownload(fileData, displayName);
      }
    } catch (error) {
      console.error('❌ Error con HttpClient:', error);
      // Fallback a método simple
      this.fallbackDownload(fileName, displayName);
    }
  }

  private triggerDownload(blob: Blob, fileName: string) {
    // SOLUCIÓN para el error de URL - usar any o verificar existencia
    const url = (window as any).URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    (window as any).URL.revokeObjectURL(url);
  }

  private fallbackDownload(fileName: string, displayName: string) {
    // Método simple como fallback
    const baseUrl = window.location.origin;
    const fileUrl = `${baseUrl}/assets/${fileName}`;
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${displayName}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Función para abrir recursos externos
  openExternal(url: string) {
    window.open(url, '_blank');
  }

  // Función para llamada de crisis
  callCrisisLine() {
    window.open('tel:911', '_self');
  }
}