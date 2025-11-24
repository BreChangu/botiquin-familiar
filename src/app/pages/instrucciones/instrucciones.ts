// src/app/pages/instrucciones/instrucciones.ts (CÓDIGO FINAL Y CORREGIDO)

import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgFor, NgIf } from '@angular/common'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // <-- IMPORTS DE SEGURIDAD
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-instrucciones',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    NgFor,
    NgIf,
    MatExpansionModule,
  
  ],
  templateUrl: './instrucciones.html',
  styleUrl: './instrucciones.css'
})
export class Instrucciones implements OnInit { // Usamos OnInit para inicializar

  // --- 1. DECLARACIÓN DE VARIABLES (Fuera del constructor) ---
  videoYoutubeId: string = 'JLi7dLJAEuU';
  safeVideoUrl!: SafeResourceUrl; // Se declara aquí
  showExtraTips: boolean = false;

  // Variables para el Checklist (se quedan igual)
  checklistItems = [
    { text: "He definido una hora del día para 'escuchar activamente' sin interrupciones (sin móvil, sin TV).", completed: false },
    { text: "He identificado mis 3 frases invalidantes más comunes (ej. 'Échale ganas') que quiero eliminar esta semana.", completed: false },
    { text: "He practicado en mi mente 3 respuestas de validación para escenarios comunes (ej. frustración, tristeza).", completed: false },
    { text: "He modelado vulnerabilidad al menos una vez esta semana, compartiendo un sentimiento honesto con mi familia.", completed: false },
    { text: "He revisado la Regla 3: 'Validar la Emoción, Discutir la Conducta' para tener claro cómo poner límites sin invalidar.", completed: false },
  ];
  totalItems: number = this.checklistItems.length;

  // --- 2. INYECCIÓN DE DEPENDENCIA (Usa el constructor simple) ---
  // El DomSanitizer NO se lista en imports. Solo se inyecta.
  constructor(private sanitizer: DomSanitizer) {} 

  // --- 3. LÓGICA DE INICIALIZACIÓN (Usamos ngOnInit) ---
  ngOnInit(): void {
    // Definimos safeVideoUrl en la inicialización
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${this.videoYoutubeId}?autoplay=1&mute=1`
    );
  }


  // --- RESTO DE LA LÓGICA DEL CHECKLIST (se queda igual) ---
  get itemsCompleted(): number {
    return this.checklistItems.filter(item => item.completed).length;
  }
  get progressValue(): number {
    return (this.itemsCompleted / this.totalItems) * 100;
  }
}