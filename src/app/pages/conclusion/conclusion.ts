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
openResource(fileName: string, target: string = '_blank') { 
  // Construimos la URL de forma ABSOLUTA desde la raíz para evitar errores 404
  const url = '/assets/' + fileName;
  window.open(url, target);
}

downloadables = [
  { 
    name: 'Diario Terapéutico de Conexión Personal',
    description: 'Un set de 49 páginas para el seguimiento de patrones de pensamiento y emoción. Incluye secciones para el Registro Diario , rastreadores de Hábitos que me Hacen Bien , herramientas de reestructuración cognitiva (como la Papelera de Pensamientos Negativos ), y un Plan de Crisis Personal.',
    file: 'diario.pdf', // <-- ESTANDARIZADO
    icon: 'edit_note'
  },
  { 
    name: 'Farmacia Emocional',
    description: 'Un set de plantillas  para imprimir y armar tus propios remedios simbólicos en casa. Incluye etiquetas para ABRAZOTENOL (indicado para extrañar menos ), RISOTRIL® (para que nunca falten las risas ), y CORAZOLINA (200mg de amor incondicional )',
    // CORRECCIÓN CLAVE: ¡TODAS MINÚSCULAS!
    file: 'guia-antidotos-rapida.pdf', 
    icon: 'menu_book'
  }
];
}