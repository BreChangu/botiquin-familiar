// src/app/pages/diagnostico/diagnostico.ts (CÓDIGO COMPLETO Y CORREGIDO)

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgIf,NgFor } from '@angular/common'; // <-- Necesario para el *ngIf
import { MatButtonModule } from '@angular/material/button'; // <-- Necesario para los botones

// Interfaz para definir cada frase y su impacto oculto
interface Phrase {
  text: string;
  impact: string;
}

@Component({
  selector: 'app-diagnostico',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    MatButtonModule,
    NgFor
  ],
  templateUrl: './diagnostico.html',
  styleUrl: './diagnostico.css'
})
export class Diagnostico {
  
  // Lista de frases invalidantes y su impacto psicológico
  phrases: Phrase[] = [
    { 
      text: '"No llores" / "No es para tanto"', 
      impact: 'Mensaje: La tristeza es peligrosa o inaceptable. Resultado: El individuo aprende a reprimir el dolor, lo cual lleva a la somatización o la ansiedad crónica.' 
    },
    { 
      text: '"¡Échale ganas!"', 
      impact: 'Mensaje: Tu estado emocional actual es un fallo moral. Resultado: El individuo se aísla, sintiendo culpa por su propia fatiga o ansiedad.' 
    },
    { 
      text: '"Presión la mía, tú solo estudias"', 
      impact: 'Mensaje: Mis problemas son más importantes que los tuyos. Resultado: Se invalida la experiencia del niño/joven, enseñándole que su dolor no tiene valor.' 
    },
    { 
      text: '"¡Cálmate ya!"', 
      impact: 'Mensaje: Tu enojo o frustración es una amenaza a mi paz. Resultado: El individuo internaliza que su ira no puede ser expresada de forma sana, lo cual lleva a explosiones incontroladas o resentimiento.' 
    },
    { 
      text: 'Evitar el tema o cambiar la conversación', 
      impact: 'Mensaje: Este tema es peligroso. Resultado: Se perpetúa el "silencio heredado", enseñando que los problemas se evitan en lugar de resolverse.' 
    },
    { 
      text: '"No te enojes, no vale la pena"', 
      impact: 'Mensaje: Tu enojo es inapropiado o inútil. Resultado: La persona aprende a suprimir su ira, llevándola a pasividad-agresiva o depresión.' 
    },
    { 
      text: '"Deberías estar feliz" / "Mira el lado bueno"', 
      impact: 'Mensaje: La felicidad es la única emoción aceptable. Resultado: Se niega la validez de otras emociones, fomentando la culpa por sentir tristeza o frustración.' 
    },
    { 
      text: '"No tienes razones para sentirte así"', 
      impact: 'Mensaje: Tus sentimientos no tienen fundamento o son irracionales. Resultado: El individuo duda de su propia percepción y comienza a ignorar sus señales internas.' 
    },
    { 
      text: '"No seas dramático/a"', 
      impact: 'Mensaje: Tus emociones son una exageración. Resultado: La persona aprende a minimizar su dolor para evitar el juicio, lo que lleva a no buscar ayuda cuando la necesita.' 
    },
    { 
      text: '"Estás exagerando"', 
      impact: 'Mensaje: Tu respuesta emocional es desproporcionada. Resultado: Se fomenta la inseguridad emocional y la creencia de que uno no puede confiar en sus propias reacciones.' 
    }
  ];

  currentImpact: string = ''; 

  revealImpact(impact: string) {
    this.currentImpact = impact;
  }
}