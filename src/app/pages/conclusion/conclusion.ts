// src/app/pages/conclusion/conclusion.ts (CÓDIGO FINAL VERIFICADO)

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // <-- CLAVE: MatCard
import { NgFor, NgIf } from '@angular/common'; 
import { MatIconModule } from '@angular/material/icon'; // <-- CLAVE: MatIcon
import { MatButtonModule } from '@angular/material/button'; 

interface Resource {
    name: string;
    url: string;
    icon: string;
    description: string;
}

@Component({
  selector: 'app-conclusion',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    NgFor,
    NgIf,
    MatButtonModule // Necesario para el botón de crisis
  ],
  templateUrl: './conclusion.html',
  styleUrl: './conclusion.css'
})
export class Conclusion {
  
  // Mensaje inspiracional final
  finalQuote: string = "El amor no es la ausencia de conflictos, sino la capacidad de enfrentarlos juntos y repararlos.";
  
  // Recursos externos (Actualizado con descripciones)
  externalResources: Resource[] = [
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
  
  // Método para generar una frase aleatoria
  generateDailyAnchor() {
    const randomIndex = Math.floor(Math.random() * this.anchoringQuotes.length);
    this.dailyAnchor = this.anchoringQuotes[randomIndex];
  }
  
  // Simplemente abre el enlace en una nueva pestaña
  openResource(url: string) {
    window.open(url, '_blank');
  }
}