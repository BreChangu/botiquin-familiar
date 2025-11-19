// src/app/pages/introduccion/introduccion.ts (CÓDIGO COMPLETO Y CORREGIDO)

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar'; // <-- MÓDULO FALTANTE
import { NgIf, NgClass } from '@angular/common'; // <-- Agregado para usar *ngIf y [ngClass]
import { MatExpansionModule } from '@angular/material/expansion';

interface Question {
  text: string;
  isAnswered: boolean;
  value: boolean; // true = Sí, false = No
}

@Component({
  selector: 'app-introduccion',
  standalone: true,
  imports: [
    MatCardModule,
    MatCheckboxModule, 
    FormsModule, 
    MatButtonModule,
    MatProgressBarModule, // <-- AÑADIDO PARA LA BARRA DE PROGRESO
    NgIf, // <-- Necesario para el *ngIf
    NgClass,
    MatExpansionModule, 
  ],
  templateUrl: './introduccion.html',
  styleUrl: './introduccion.css'
})
export class Introduccion {
  
  // --- VARIABLES DE ESTADO Y DATOS ---
  score: number = 0; 
  resultadoVisible: boolean = false;
  currentQuestionIndex: number = 0;
  
  // El arreglo de preguntas, con sintaxis TypeScript limpia
  questions: Question[] = [
    { text: "¿Sentías que tenías que esconder tu tristeza o miedo para no preocupar o molestar a los adultos?", isAnswered: false, value: false },
    { text: "¿Las peleas o tensiones importantes entre adultos se manejaban en silencio o a puertas cerradas?", isAnswered: false, value: false },
    { text: "¿Alguna vez te dijeron ya se te pasará o no es para tanto al expresar una emoción fuerte (ira, frustración)?", isAnswered: false, value: false },
    { text: "¿Sentías que el afecto o el orgullo de tus padres dependía de que obtuvieras buenas calificaciones o te portaras bien?", isAnswered: false, value: false },
    { text: "¿Te resultó más fácil pedir perdón por un error que expresar que estabas realmente enojado/herido?", isAnswered: false, value: false },
  ];

  
  // --- LÓGICA DEL QUIZ ---

  responder(respuesta: boolean) {
    this.questions[this.currentQuestionIndex].value = respuesta;
    this.questions[this.currentQuestionIndex].isAnswered = true;
    
    // Aplicar animación y pasar a la siguiente
    setTimeout(() => {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.calcularPatron(); // Finaliza el quiz
      }
    }, 200);
  }

  calcularPatron() {
    this.score = this.questions.filter(q => q.value).length;
    this.resultadoVisible = true;
  }

  // Métodos de utilidad
  getMessage() {
    if (this.score === this.questions.length) {
      return "Alto. Es crucial que continúes con el Diagnóstico. Estos patrones te están hablando fuerte. Tienes una gran oportunidad de cambio.";
    } else if (this.score >= 1) {
      return "Moderado. Hay ecos de patrones. El Botiquín te dará herramientas para romperlos con éxito.";
    } else {
      return "Bajo. ¡Excelente! Tu comunicación inicial es sólida, pero la guía aún tiene valor.";
    }
  }

  reset() {
    this.currentQuestionIndex = 0;
    this.resultadoVisible = false;
    this.score = 0;
    // Reinicia el estado de todas las preguntas
    this.questions.forEach(q => {
        q.isAnswered = false;
        q.value = false;
    });
  }
}